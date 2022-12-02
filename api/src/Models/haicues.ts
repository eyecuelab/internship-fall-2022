import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getHaicues = async () => {
	return await prisma.haicues.findMany();
}

export const getOneHaicue = async (id: number) => {
	return await prisma.haicues.findUnique({
		where: {
			id: id,
		}
	});
}

export const getRoundHaicues = async (id: number) => {
	return await prisma.haicues.findMany({
		where: {
			roundId: id
		}
	});
}

export const createHaicues = async (roundNum: number, team: number, line1: string, line2: string, line3: string) => {
	return await prisma.haicues.create({
    data: {
			roundId: 1,
			teamId: 1,
			line1: line1,
			line2: line2,
			line3: line3,
    }
  });
}

export const updateHaicue = async (id: number, line1: string, line2: string, line3: string) => {
	return await prisma.haicues.update({
		where: {
			id: id,
		},
		data: {
			line1: line1,
			line2: line2,
			line3: line3,
		}
	})
}