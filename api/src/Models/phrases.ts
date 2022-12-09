import { Phrases, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Phrase = {
	id: number
  body: String
  wordCount: number
  topic: any
  topicId: number
}

export const getSinglePhrase = async (phraseId: number) => {
	return await prisma.phrases.findUnique({
		where: {
			id: Number(phraseId)
		}
	})
}



export const getPhrase = async (topicId: number) => {
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

export const createPhrase = async (body: string, topicId: number, moderatorId: number) => {
  return await prisma.phrases.create({
    data: {
      body: body,
			wordCount: Number(body.split(" ").length),
			topic: { connect: { id: topicId } },
			// @ts-ignore
			moderator: { connect: { id: moderatorId } },
    }
  });
}

export const deletePhrase = async(id: number) => {
  return await prisma.phrases.delete({
      where: {
        id: Number(id), 
      }
  });
}
