import { PrismaClient } from '@prisma/client';
import GameCode from '../GenerateGameCode';

const prisma = new PrismaClient();

export const getGames = async () => {
  return await prisma.games.findMany();
}

export const createGame = async (name: string, moderatorId: number) => {
  return await prisma.games.create({
    data: {
			...{
				name: name,
				gameCode: GameCode.generate(),
				rounds: 0,
				moderator: { connect: { id: moderatorId } }
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

export const updateGameStatus = async (id: number)=>{
	const now = new Date();
	return await prisma.games.update({
	  where: { id: Number(id) },
	  data: { publishedAt: now }
	});
  }
