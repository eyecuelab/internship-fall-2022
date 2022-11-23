import { PrismaClient } from '@prisma/client';
import GameCode from '../GenerateGameCode';

const prisma = new PrismaClient();

export const getGames = async () => {
  return await prisma.games.findMany();
}

export const createGame = async (name: string) => {
  return await prisma.games.create({
    data: {
			...{
				name: name,
				gameCode: GameCode.generate(),
				rounds: 0
			}
    }
  });
}

export const deleteGame = async (id: number)=>{
  return await prisma.games.delete({
    where: {
      id: Number(id),
    }
  });
}
