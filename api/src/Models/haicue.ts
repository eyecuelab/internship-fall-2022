import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getHaicue = async () => {
	return await prisma.haicues.findMany();
}

export const createHaicue = async (roundNum: number, team: number, line1: string, line2: string, line3: string) => {
	return await prisma.haicues.create({
    data: {
			roundId: 1,
			teamId: 1,
			line1: '',
			line2: '',
			line3: '',
    }
  });
}