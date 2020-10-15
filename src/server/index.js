const express = require('express');

const config = require('../../config');
const router = require('../routers');
const { dbMiddleware, closeDbConnection } = require('../middlewares');

const { server: { host, port, protocol }} = config;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbMiddleware(app, config);
router(app);

app.listen(port, () => console.log(`Application running at ${protocol}://${host}:${port}`));