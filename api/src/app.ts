import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import express from 'express';

const prisma = new PrismaClient();
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.get('/users', async (req, res) => {
  const users = await prisma.users.findMany();
  res.json(users);
});

app.get('/teams', async (req, res) => {
  const teams = await prisma.teams.findMany();
  res.json(teams);
});

app.post('/teams', async (req, res) => {
  const { teamName } = req.body;
  const newTeam = async (teamName: string, teamLeaderId: number) => {
    return await prisma.teams.create({
      data: {
        teamName,
        teamLeaderId,
        teamScore: 0,
        gameId: 1
      }
    });
  }
  newTeam(teamName, 1);
});

export default app;


