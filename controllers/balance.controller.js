import { db } from '../database/db.js';
import dayjs from 'dayjs';

async function postBalance(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    const { value, description } = req.body;

    try {
        await db.collection('balances').insertOne({ value, description, time: dayjs().format("DD/MM"), token })

        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

async function getBalance(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '');

    try {
        const userBalance = await db.collection('balances').find({ token }).toArray();

        if (!userBalance) {
            return res.sendStatus(404);
        }
        userBalance.forEach((balance) => {
            delete balance._id;
            delete balance.token;
        })
        

        console.log(userBalance)
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export { postBalance, getBalance };