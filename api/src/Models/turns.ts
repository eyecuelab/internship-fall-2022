import { Phrases, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTurn = async (turnId: number) => {
	return await prisma.turns.findUnique({
		where: {
			id: turnId
		}
	});
}

export const createTurn = async (roundId: number, presentingTeamId: number) => {
	return await prisma.turns.create({
		data: {
			Round: { connect: { id: Number(roundId) }}	,
			performingTeam: { connect: { id: Number(presentingTeamId)}}
		}
	})
}

export const updatePresentingTeam = async (turnId: number, teamId: number) => {
	return await prisma.turns.update({
		where: {
			id: Number(turnId)
		},
		data: {
			performingTeam: { connect: { id: Number(teamId) } }
		}
	})
}