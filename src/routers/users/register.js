const express = require('express');
const { registerSchema } = require('../../schema');
const { encrypt } = require('../../utils');

const router = express.Router();

router.post('/users/register', async (req, res) => {
    const { UserDbConnector } = res.locals;
    try {
        const { error, value } = registerSchema.validate(req.body);
        if (error) {
            throw new Error(error.message);
        }
        value.password = encrypt(value.password);
        const user = await UserDbConnector.insert(value);
        const resp = { ...user.dataValues };
        delete resp.password;
        res.send(resp);
    } catch(e) {
        res.send({ message: e.message });
    }
});

module.exports = router;