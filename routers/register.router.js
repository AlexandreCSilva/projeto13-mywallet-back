import express from 'express';
import { postRegister } from '../controllers/register.controller.js';
import { validateRegister } from '../middlewares/registerValidationMiddleware.js';

const router = express.Router();

router.use(validateRegister);

router.post('/register', postRegister);

export default router;