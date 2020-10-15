const express = require('express');

const router = express.Router();

router.get('/users', async (req, res) => {
    const { UserDbConnector } = res.locals;
    try {
        const filter = {
            attributes: { exclude: ['password'] }
        };
        const users = await UserDbConnector.findAll(filter);
        res.send(users);
    } catch(e) {
        res.send({ message: e.message });
    }
});

module.exports = router;