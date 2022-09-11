import { db } from '../database/db.js';
import dayjs from 'dayjs';

async function status(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '');

    try {
        const session = await db.collection('sessions').findOne({ token });
        if (!session) {
          return res.sendStatus(404);
        }
    
        const user = await db.collection('users').find({ _id: session.userId }).toArray();

        if (!user){
            return res.sendStatus(404);;
        }

        await db.collection('sessions').updateOne({ token }, { $set: { lastStatus: dayjs() }});

        return  res.sendStatus(200);
    
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
}

export { status };