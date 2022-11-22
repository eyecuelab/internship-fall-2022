import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTopic = async (topicId: number) => {
	try {
		return await prisma.topics.findUnique({
			where: {
				id: Number(topicId)
			}
		});
	} catch(error: unknown) {
		if (error instanceof Error)
		throw error.message;
	}
}

export const getTopics = async (gameId: number) => {
  try {
	  return await prisma.topics.findMany({
			where: {
				// @ts-ignore
				gameId: Number(gameId),
			}
		});
	} catch(error: unknown) {
		if (error instanceof Error)
		throw error.message;
	}
}

export const createTopic = async (topicName: string, gameId: number) => {
  return await prisma.topics.create({
    data: {
      name: topicName,
			// @ts-ignore
      game: { connect: { id: gameId } }
    }
  });
}