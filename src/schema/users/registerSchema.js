const Joi = require('joi');

const registerSchema = Joi.object({
    firstname: Joi.string()
        .min(2)
        .max(50)
        .required(),
    lastname: Joi.string()
        .min(2)
        .max(50)
        .required(),
    email: Joi.string()
        .email()
        .min(5)
        .max(50)
        .required(),
    password: Joi.string()
        .min(5)
        .max(30)
        .required()
});

module.exports = registerSchema;