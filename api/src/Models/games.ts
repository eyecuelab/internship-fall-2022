import { PrismaClient } from '@prisma/client';
import GameCode from '../GenerateGameCode';

const prisma = new PrismaClient();

export const getGameById = async (id: number) => {
  return await prisma.games.findUnique({
		where: {
			id: Number(id)
		},
		include: {
			Topic: true,
		}
	});
}

export const getGameByCode = async (code: string) => {
	return await prisma.games.findUnique({
		where: {
			gameCode: code
		},
		include: {
			Topic: true,
			Team: true,
		}
	});
}

export const getGameByModerator = async (moderatorId: number) => {
  return await prisma.games.findMany({
		where: {
			moderatorId: Number(moderatorId)
		},
		include: {
			Topic: true,
		}
	});
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
