import express from 'express';
import { postEdit } from '../controllers/edit.controller.js';
import { validateBalance } from '../middlewares/balanceValidation.js';

const router = express.Router();

router.post('/edit', validateBalance, postEdit);

export default router;