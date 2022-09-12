import express from 'express';
import cors from 'cors';
import registerRouter from './routers/register.router.js';
import authRouter from './routers/auth.router.js';
import statusRouter from './routers/status.router.js';
import balanceRouter from './routers/balance.router.js';
import deleteRouter from './routers/delete.router.js';
import editRouter from './routers/edit.router.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use(registerRouter);
app.use(authRouter); 
app.use(statusRouter);
app.use(balanceRouter);
app.use(deleteRouter);
app.use(editRouter);

app.listen(5000, () => console.log('Server On'));