import { db } from '../database/db.js';
import mongoose from 'mongoose';

async function deleteBalance(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    const balanceId = req.headers.balanceid;

    try {
        const session = await db.collection('sessions').findOne({ token });
        
        if (!session) {
          return res.sendStatus(404);
        }

        const balance = await db.collection('balances').findOne({ _id: mongoose.Types.ObjectId(balanceId) });

        if (!balance) {
            return res.sendStatus(404);
        }

        await db.collection('balances').deleteOne({ _id: mongoose.Types.ObjectId(balanceId) });

        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export { deleteBalance };