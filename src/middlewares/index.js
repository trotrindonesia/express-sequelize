const { dbMiddleware, closeDbConnection } = require('./dbMiddleware');
const setupMiddleware = require('./setupMiddleware');

const loadMiddlewares = (app, config) => {
    dbMiddleware(app, config);
    setupMiddleware(app, config)
};

module.exports = {
    loadMiddlewares,
    closeDbConnection
};