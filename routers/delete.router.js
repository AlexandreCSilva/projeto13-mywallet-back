import express from 'express';
import { deleteBalance } from '../controllers/delete.controller.js';

const router = express.Router();

router.delete('/balance/:balanceId', deleteBalance);

export default router;