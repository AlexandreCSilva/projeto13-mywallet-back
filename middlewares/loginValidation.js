import joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';

const joiPassword = joi.extend(joiPasswordExtendCore);

const schemaLogin = joi.object({
    email: joi.string()
        .email()
        .required(),

    password: joiPassword
        .string()
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .required()
})   

async function validateLogin(req, res, next) {
    const validation = schemaLogin.validate(req.body, { abortEarly: false });

    if (validation.error) {
        console.log(validation.error.message);
        return res.sendStatus(422);
    }

    next();
}

export { validateLogin };