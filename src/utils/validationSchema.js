const {
    errors: { BadRequestError },
} = require('custom-error-exceptions');

const validationSchema = (schema) => {
    return async (req, res, next) => {
        const { value, error } = schema.validate(req.body);
        if (error) {
            return next(new BadRequestError(error.message));
        } else {
            req.body = value;
            return next();
        }
    };
};

module.exports = validationSchema;