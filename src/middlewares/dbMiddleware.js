const database = require('../database/connect');
const { DbConnector } = require('../connectors');
const { userModel } = require('../models');

const dbMiddleware = (app, config) => {
    const { dbConfig } = config;
    const db = database(app, dbConfig);
    app.use(async (req, res, next) => {
        res.locals.UserDbConnector = new DbConnector({ table: userModel(db) });
        next();
    })
}

const closeDbConnection = (app) => {
    return (req, res, next) => {
        const sequelize = app.locals.db;
        sequelize.close()
        next();
    }
}

module.exports = { dbMiddleware, closeDbConnection };