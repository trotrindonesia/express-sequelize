const users = require('./users');

const routers = [
    ...users
];

module.exports = (app) => {
    app.use(routers)
};