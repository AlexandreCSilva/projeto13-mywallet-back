import express from 'express';
import cors from 'cors';
import registerRouter from './routers/register.router.js';
import loginRouter from './routers/login.router.js';

const app = express();

app.use(cors());
app.use(express.json());
/* 
app.use(registerRouter); */
app.use(loginRouter);

app.listen(5000, () => console.log(`Server On`));