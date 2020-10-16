const getUserHandler = async (req, res) => {
    const { UserDbConnector } = res.locals;
    const filter = {
        attributes: { exclude: ['password'] }
    };
    const users = await UserDbConnector.findAll(filter);
    res.send(users);
};

module.exports = getUserHandler;