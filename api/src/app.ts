import { PrismaClient } from '@prisma/client';
import teamsRouter from "./Routes/teams";
import usersRouter from "./Routes/users";
import cors from 'cors';
import express from 'express';

const prisma = new PrismaClient();
const app = express();

app.use(cors({ origin: '*', methods: ['GET', 'POST']}));

app.use(express.json());

app.use(teamsRouter, usersRouter);

export default app;
