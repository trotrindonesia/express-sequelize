const Sequelize = require('sequelize');

const connectDb = (app, config) => {
    const { host, port, dialect, pool, database, username, password } = config;
    const sequelize = new Sequelize(database, username, password, {
        host,
        port,
        dialect,
        pool
    });
    app.locals.db = sequelize;
    return sequelize;
}

module.exports = connectDb;