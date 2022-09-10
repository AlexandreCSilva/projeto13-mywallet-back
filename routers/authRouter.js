import express from 'express';
import { signUp } from "./controllers/auth.controller.js";
import router from '../index.js';

const authRouter = express.Router();

router.get('', signUp);

export default authRouter;
