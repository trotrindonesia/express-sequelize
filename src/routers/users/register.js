const express = require('express');
const {
    handlers: { createHandler }
} = require('custom-error-exceptions');

const { registerSchema: schema } = require('../../schema');
const { validationSchema } = require('../../utils');
const { registerUserHandler: handler } = require('../../handlers');

const router = express.Router();

router.post(
    '/users/register',
    validationSchema(schema),
    createHandler(handler)
);

module.exports = router;