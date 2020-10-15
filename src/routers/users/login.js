const express = require('express');
const { loginSchema } = require('../../schema');
const { compare } = require('../../utils');

const router = express.Router();

router.post('/users/login', async (req, res) => {
    const { UserDbConnector } = res.locals;
    try {
        const { error, value } = loginSchema.validate(req.body);
        if (error) {
            throw new Error(error.message);
        }
        const filter = {
            where: { email: value.email }
        };

        const user = await UserDbConnector.findOne(filter);
        if (!user) {
            throw new Error('Email / Password not valid')
        }
        const validateLogin = compare(value.password, user.password);
        if (!validateLogin) {
            throw new Error('Email / Password not valid')
        }
        const response = { ...user.dataValues };
        delete response.password;
        res.send(response);
    } catch(e) {
        res.send({ message: e.message });
    }
});

module.exports = router;