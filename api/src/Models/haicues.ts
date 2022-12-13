import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createHaicue = async (roundId: number, teamId: number, phraseId: number, line1: string, line2: string, line3: string) => {
	return await prisma.haicues.create({
    data: {
			Round: { connect: {id: Number(roundId)}},
			Team: { connect: {id: Number(teamId)}},
			Phrase: { connect: {id: Number(phraseId)}},
			line1: line1,
			line2: line2,
			line3: line3,
    }
  });
}

export const getHaicues = async () => {
	return await prisma.haicues.findMany();
}

export const getHaicueByTeamRound = async (roundId: number, teamId: number) => {
	return await prisma.haicues.findFirst({
		where: {
			teamId: Number(teamId),
			roundId: Number(roundId),
		},
		include: {
			Phrase: true,
			Round: true,
			Team: true
		}
	});
}

export const getHaicuesByRound = async (id: number) => {
	return await prisma.haicues.findMany({
		where: {
			roundId: Number(id)
		},
		include: {
			Phrase: true,
			Round: true,
			Team: true
		}
	});
}

export const resubmitHaicue = async (id: number, line1: string, line2: string, line3: string) => {
	return await prisma.haicues.update({
		where: {
			id: Number(id),
		},
		data: {
			line1: line1,
			line2: line2,
			line3: line3,
		}
	})
}