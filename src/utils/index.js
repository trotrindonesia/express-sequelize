const typeParser = require('./typeParser');
const getBcrypt = require('./getBcrypt');

module.exports = {
    typeParser,
    ...getBcrypt
};
