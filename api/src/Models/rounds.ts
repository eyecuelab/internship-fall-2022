import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getOneRound = async (roundId: number) => {
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

export const addRound = async (gameId: number, topicId: number) => {
	return await prisma.rounds.create({
		data: {
			gameId: Number(gameId),
			topicId: Number(topicId),
		}
	});
}

// const assignTurns = async (round: Rounds, ) => {
// 	for (let i=0; i<round.Haicues.length; i++) {
// 		await prisma.turns.create({
// 			data: {

// 			}
// 		})
// 	}
// }