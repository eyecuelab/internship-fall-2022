import { Phrases, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addRound = async (gameId: number, topicId: number) => {
	return await prisma.rounds.create({
		data: {
			gameId: Number(gameId),
			topicId: Number(topicId)
		}
	});
}

export const getCurRoundIdByGameId = async (gameId: number) => {
	return await prisma.rounds.findMany({
		where: {
			gameId: Number(gameId)
		},
		orderBy: {
			id: 'desc',
		},
		take: 1
	});
}
