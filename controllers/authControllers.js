import db from './db.js';

async function signUp(req, res) {
    const { email, password }= req.body;

    const user = db.collection('users').findOne({ email });

    res.sendStatus(201);
}

export { signUp };