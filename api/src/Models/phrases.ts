import { Phrases, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPhrase = async (body: string, topicId: number, moderatorId: number) => {
  return await prisma.phrases.create({
    data: {
      body: body,
			wordCount: Number(body.split(" ").length),
			Topic: { connect: { id: topicId } },
    }
  });
}

export const getPhrasesByTopic = async (topicId: number) => {
  try {
		return await prisma.phrases.findMany({
			where: {
				topicId: Number(topicId),
			}
		});
	} catch(error: unknown) {
		if (error instanceof Error)
		throw error.message;
	}
}

export const getUniquePhrase = async (topicId: number) => {
	const phrases = await prisma.phrases.findMany({
		where: {
			topicId: Number(topicId),
		}
	});
		for (let i=0; i<phrases.length; i++) {
			if (phrases[i].teamId === null) {
				return phrases[i];
			}
		}
}

export const deletePhrase = async(id: number) => {
  return await prisma.phrases.delete({
      where: {
        id: Number(id), 
      }
  });
}
