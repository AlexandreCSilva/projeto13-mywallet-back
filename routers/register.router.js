import express from 'express';
import { postRegister } from '../controllers/register.controller.js';

const router = express.Router();

router.post('/register', postRegister);

export default router;