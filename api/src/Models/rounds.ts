import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addRound = async (gameId: number, topicId: number) => {
	return await prisma.rounds.create({
		data: {
			gameId: Number(gameId),
			topicId: Number(topicId),
		}
	});
}

export const getRoundById = async (roundId: number) => {
	return await prisma.rounds.findUnique({
		where: {
			id: Number(roundId)
		},
		include: {
			Turns: true,
			Haicues: true
		}
	})
}

export const getCurRoundByGame = async (gameId: number) => {
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
