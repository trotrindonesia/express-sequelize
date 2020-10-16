const {
    errors: { ConflictError },
} = require('custom-error-exceptions');

const registerUserHandler = async (req, res) => {
    const { UserDbConnector, config } = res.locals;
    const { encryption: { keyRounds, encrypt } } = config;

    const filter = {
        where: { email: req.body.email }
    };

    const checkUser = await UserDbConnector.findOne(filter);
    if (checkUser) {
        throw new ConflictError('Account already registered')
    }

    req.body.password = encrypt(req.body.password, keyRounds);
    const user = await UserDbConnector.insert(req.body);

    const response = { ...user.dataValues };
    delete response.password;

    res.send(response);
};

module.exports = registerUserHandler;