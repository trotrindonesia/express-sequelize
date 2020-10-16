require('dotenv').config();

const {
    typeParser: { isString, isNumber },
    encrypt,
    compare
} = require('../src/utils');

const config = {
    server: {
        host: isString(process.env.HOST),
        port: isNumber(process.env.PORT),
        env: isString(process.env.NODE_ENV) == 'production' ? 'production' : isString(process.env.NODE_ENV),
        protocol: isString(process.env.PROTOCOL)
    },
    dbConfig: {
        host: isString(process.env.DB_HOST),
        port: isNumber(process.env.DB_PORT),
        dialect: isString(process.env.DB_DIALECT),
        pool: {
            max: isNumber(process.env.DB_POOL_MAX),
            min: isNumber(process.env.DB_POOL_MIN),
            idle: isNumber(process.env.DB_POOL_IDLE)
        },
        database: isString(process.env.DB_NAME),
        username: isString(process.env.DB_USERNAME),
        password: isString(process.env.DB_PASSWORD)
    },
    encryption: {
        keyRounds: isNumber(process.env.SALT_ROUND),
        encrypt,
        compare
    }

}

module.exports = config;