import { PrismaClient } from '@prisma/client';
import teamsRouter from "./Routes/teams";
import cors from 'cors';
import express from 'express';

const prisma = new PrismaClient();
const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());

app.use(teamsRouter);

app.get('/users', async (req, res) => {
  const users = await prisma.users.findMany();
  res.json(users);
});

export default app;
