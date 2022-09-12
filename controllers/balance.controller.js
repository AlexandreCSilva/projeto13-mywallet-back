import { db } from '../database/db.js';
import dayjs from 'dayjs';

async function postBalance(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    const { value, description, positive } = req.body;

    try {
        const session = await db.collection('sessions').find({ token }).toArray();
        
        if (!session) {
            return res.sendStatus(404);
        }

        await db.collection('balances').insertOne({ value, description, time: dayjs().format("DD/MM"), token: token, positive: positive, name: session[0].name  })
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

async function getBalance(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '');

    try {
        const session = await db.collection('sessions').find({ token }).toArray();
        
        if (!session) {
            return res.sendStatus(404);
        }

        const userBalance = await db.collection('balances').find({ name: session[0].name  }).toArray();

        if (!userBalance) {
            return res.sendStatus(404);
        }

        userBalance.forEach((balance) => {
            delete balance.token;
            delete balance.name;
        })

        res.send(userBalance).status(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export { postBalance, getBalance };