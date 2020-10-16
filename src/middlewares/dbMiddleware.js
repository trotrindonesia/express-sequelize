const database = require('../database/connect');
const { DbConnector } = require('../connectors');
const { userModel } = require('../models');

const dbMiddleware = (app, config) => {
    const { dbConfig } = config;
    const db = database(app, dbConfig);
    app.use(async (req, res, next) => {
        res.locals.database = db;
        res.locals.UserDbConnector = new DbConnector({ db, table: userModel(db) });
        next();
    })
}

const closeDbConnection = (req, res, next) => {
    res.on('finish', () => {
        const sequelize = res.locals.database;
        sequelize.close();
        console.log('database closed');
    });
    next();
}

module.exports = { dbMiddleware, closeDbConnection };