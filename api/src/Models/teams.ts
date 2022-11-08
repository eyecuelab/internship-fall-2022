import { Teams, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTeams = async () => {
  return await prisma.teams.findMany();
}

export const createTeam = async (teamName: string, /*teamLeaderId: number*/) => {
  return await prisma.teams.create({
    data: {
      teamName: teamName,
      teamLeaderId: 1,
      teamScore: 0,
      game: {}
    }
  });
}