import { db } from '../database/db.js';

async function signUp(req, res) {
    const { email, password } = req.body;

    try {

        const user = await db.collection('users').findOne({ email });

        if (user) {
            console.log(' user')
        }
        res.send(201);
    } catch (err) {
        console.error(err);
        res.send(500);
    }
}

export { signUp };