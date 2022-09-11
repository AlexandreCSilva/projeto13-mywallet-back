import express from 'express';
import { signIn } from "../controllers/auth.controller.js";
import { validateLogin } from '../middlewares/loginValidation.js';

const router = express.Router();

router.use(validateLogin);

router.post('/sign-in', signIn);

export default router;