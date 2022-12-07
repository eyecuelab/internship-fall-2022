import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getHaicues = async () => {
	return await prisma.haicues.findMany();
}

export const getOneHaicue = async (roundId: number, teamId: number) => {
	console.log('TROUBLESOME ROUND: ', roundId);
	return await prisma.haicues.findFirst({
		where: {
			teamId: Number(teamId),
			roundId: Number(roundId),
		}
	});
}

export const getRoundHaicues = async (id: number) => {
	return await prisma.haicues.findMany({
		where: {
			roundId: Number(id)
		}
	});
}

export const createHaicues = async (roundId: number, teamId: number, phraseId: number, line1: string, line2: string, line3: string) => {
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

export const updateHaicue = async (id: number, line1: string, line2: string, line3: string) => {
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