import joi from 'joi';

const schemaBalance = joi.object({
    value:  joi.number()
        .integer()
        .required(),

    description: joi.string()
        .alphanum()
        .min(1)
        .max(20)
        .required()
})

async function validateBalance(req, res, next) {
    const validation = schemaBalance.validate(req.body, { abortEarly: false });

    if (validation.error) {
        console.log(validation.error.message);
        return res.sendStatus(422);
    }

    next();
}

export { validateBalance };