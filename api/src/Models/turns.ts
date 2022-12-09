import { Phrases, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTurnsByRound = async (roundId: number) => {
	return await prisma.turns.findMany({
		where: {
			roundId: Number(roundId)
		},
		include: {
			Haicue: true
		}
	});
}

export const getTurn = async (id: number) => {
	return await prisma.turns.findUnique({
		where: {
			id: Number(id)
		},
		include: {
			Haicue: true,
			performingTeam: true,
		}
	});
}

export const createTurn = async (roundId: number, presentingTeamId: number, haicueId: number) => {
	return await prisma.turns.create({
		data: {
			Round: { connect: { id: Number(roundId) }},
			performingTeam: { connect: { id: Number(presentingTeamId)}},
			Haicue: { connect: { id: Number(haicueId) }}
		}
	});
}

export const updatePresentingTeam = async (turnId: number, teamId: number) => {
	return await prisma.turns.update({
		where: {
			id: Number(turnId)
		},
		data: {
			performingTeam: { connect: { id: Number(teamId) } }
		}
	});
}