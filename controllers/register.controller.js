import { db } from '../database/db.js';

async function postRegister(req, res) {
    console.log(req.body)
    const { name, email, password, repeatPassword } = req.body;

    try {

        const user = await db.collection('users').findOne({ email });

        if (user) {
            res.sendStatus(409);
        }

        
        
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export { postRegister };