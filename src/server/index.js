const express = require('express');
const {
    logger: { requestLogger, logger },
    handlers: { errorHandler }
} = require('custom-error-exceptions');

const config = require('../../config');
const router = require('../routers');
const { loadMiddlewares } = require('../middlewares');

const { server: { host, port, protocol } } = config;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

loadMiddlewares(app, config);
router(app);

app.use(errorHandler);


app.listen(port, () => logger.info(`Application running at ${protocol}://${host}:${port}`));