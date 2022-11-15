import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getGames = async () => {
  return await prisma.games.findMany();
}

export const createGame = async (joinCode: string) => {
  return await prisma.games.create({
    data: {
      gameCode: joinCode,
			rounds: 0
    }
  });
}
