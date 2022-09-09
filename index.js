import express from "express";
import cors from 'cors';
import { signUp } from "./controllers/authControllers.js";

const server = express();

server.use(cors());
server.use(express.json());


server.post("/sign-up", signUp);

server.listen(5000, () => console.log('Server On'));