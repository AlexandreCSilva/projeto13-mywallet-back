import express from 'express';
import cors from 'cors';
import participantRouter from './routers/register.router.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(participantRouter);

app.listen(5000, () => console.log(`Server On`));