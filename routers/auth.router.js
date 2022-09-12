import express from 'express';
import { signIn } from "../controllers/auth.controller.js";
import { validateLogin } from '../middlewares/loginValidation.js';

const router = express.Router();

router.post('/sign-in', validateLogin, signIn);

export default router;