const setupMiddleware = (app, config) => {
    app.use((req, res, next) => {
        res.locals.config = config;
        next();
    });
}

module.exports = setupMiddleware;