import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTopic = async (topicName: string, gameId: number, moderatorId: number) => {
  return await prisma.topics.create({
    data: {
      name: topicName,
      Game: { connect: { id: gameId } },
    }
  });
}

export const getTopicById = async (topicId: number) => {
	try {
		return await prisma.topics.findUnique({
			where: {
				id: Number(topicId)
			},
			include: {
				Phrases: true
			}
		});
	} catch(error: unknown) {
		if (error instanceof Error)
		throw error.message;
	}
}

export const getTopicsByGame = async (gameId: number) => {
  try {
	  return await prisma.topics.findMany({
			where: {
				gameId: Number(gameId),
			},
			include: {
				Phrases: true,
			}
		});
	} catch(error: unknown) {
		if (error instanceof Error)
		throw error.message;
	}
}

export const getTopicByRound = async (roundId: number) => {
  try {
	  return await prisma.topics.findUnique({
			where: {
				roundId: Number(roundId),
			},
			include: {
				Phrases: true,
			}
		});
	} catch(error: unknown) {
		if (error instanceof Error)
		throw error.message;
	}
}

export const assignTopicToRound = async (topicId: number, roundId: number) => {
	return await prisma.topics.update({
		where: {
			id: Number(topicId)
		},
		data: {
			roundId: Number(roundId)
		}
	});
}

export const deleteTopic = async(id: number) => {
  return await prisma.topics.delete({
    where: {
      id: Number(id),
    }
  });
}