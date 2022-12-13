import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createModerator = async (email: string) => {
  return await prisma.moderators.create({
    data: {
			...{
				email: email,
			}
    }
  });
}

export const getModeratorByEmail = async (email: string) => {
  return await prisma.moderators.findUnique({
		where: {
			email: email,
		},
		include: {
			Games: true
		}
	});
}
