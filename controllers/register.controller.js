import { db } from '../database/db.js';
import bcrypt from 'bcrypt';

async function signUp(req, res) {
    
    const { email, password } = req.body;

    try {
        const user = await db.collection('users').findOne({ email });

        if (user) {
            return res.sendStatus(409);
        }

        const passwordHash = bcrypt.hashSync(password, 10);

        delete req.body.password;
        delete req.body.repeatPassword;

        await db.collection('users').insertOne({...req.body, password: passwordHash})

        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export { signUp };