import { db } from '../database/db.js';
import dayjs from 'dayjs';

async function postBalance(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    const { value, description } = req.body;

    try {
        const user = await db.collection('users').find({ token });

        if (!user) {
            return res.sendStatus(404);
        }

        await db.collection('balances').insertOne({ value, description, time: dayjs().format("DD/MM"), token })

        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export { postBalance };