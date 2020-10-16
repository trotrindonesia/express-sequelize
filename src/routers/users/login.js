const express = require('express');
const {
    handlers: { createHandler }
} = require('custom-error-exceptions');

// const { compare } = require('../../utils');

const { loginSchema: schema } = require('../../schema');
const { validationSchema } = require('../../utils');
const { loginUserHandler: handler } = require('../../handlers');

const router = express.Router();

router.post(
    '/users/login',
    validationSchema(schema),
    createHandler(handler)
);

module.exports = router;