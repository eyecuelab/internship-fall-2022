import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getModerators = async (email: string) => {
  return await prisma.moderators.findUnique({
		where: {
			email: email,
		}
	});
}

export const createModerator = async (email: string) => {
  return await prisma.moderators.create({
    data: {
			...{
				email: email,
			}
    }
  });
}
