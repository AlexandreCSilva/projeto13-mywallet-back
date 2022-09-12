import express from 'express';
import { postBalance, getBalance } from '../controllers/balance.controller.js';
import { validateBalance } from '../middlewares/balanceValidation.js';

const router = express.Router();

router.post('/balance', validateBalance, postBalance);
router.get('/balance', getBalance);

export default router;