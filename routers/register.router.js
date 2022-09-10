import express from 'express';
import { signUp } from '../controllers/register.controller.js';
import { validateRegister } from '../middlewares/registerValidation.js';

const router = express.Router();

router.use(validateRegister);

router.post('/sign-up', signUp);

export default router;