import { db } from '../database/db.js';
import mongoose from 'mongoose';
import dayjs from 'dayjs';

async function postEdit(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    const balanceId = req.headers.balanceid;
    const { value, description, positive } = req.body;

    try {
        const session = await db.collection('sessions').findOne({ token });
        
        if (!session) {
          return res.sendStatus(404);
        }

        const balance = await db.collection('balances').findOne({ _id: mongoose.Types.ObjectId(balanceId) });

        if (!balance) {
            return res.sendStatus(404);
        }
        
        await db.collection('balances').updateOne({ _id: mongoose.Types.ObjectId(balanceId) }, { $set: { value: value, description: description, positive: positive, lastStatus: dayjs() }});
        
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export { postEdit };