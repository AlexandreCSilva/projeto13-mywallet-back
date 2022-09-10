import { db } from '../database/db.js';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

async function signIn(req, res) {
    const { email, password } = req.body;
    
    try {

        const user = await db.collection('users').findOne({ email });
        const passwordIsValid = bcrypt.compareSync(password, user.password)

        if (user && passwordIsValid) {
            const token = uuid();
            console.log(token)
            await db.collection("sessions").insertOne({
                userId: user._id,
                token
            })

            return res.status(201).send(token);

        } 

        res.sendStatus(422);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export { signIn };