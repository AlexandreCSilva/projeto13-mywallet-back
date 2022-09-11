import express from 'express';
import { postBalance } from '../controllers/balance.controller.js';
import { validateBalance } from '../middlewares/balanceValidation.js';

const router = express.Router();

router.use(validateBalance);

router.post('/balance', postBalance);

export default router;