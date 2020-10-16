const {
    errors: { BadRequestError },
} = require('custom-error-exceptions');


const loginUserHandler = async (req, res) => {
    const { UserDbConnector, config } = res.locals;
   
    const filter = {
        where: { email: req.body.email }
    };

    const user = await UserDbConnector.findOne(filter);
    if (!user) {
        throw new BadRequestError('Email / Password not valid')
    }
    const validateLogin = config.encryption.compare(req.body.password, user.password);
    if (!validateLogin) {
        throw new BadRequestError('Email / Password not valid')
    }
    const response = { ...user.dataValues };
    delete response.password;
    res.send(response);

};

module.exports = loginUserHandler;