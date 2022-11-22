import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Phrase = {
	id: number
  body: String
  wordCount: number
  topic: any
  topicId: number
}

export const getPhrase = async (topicId: number) => {
  try {
		return await prisma.phrases.findMany({
			where: {
				// @ts-ignore
				topicId: Number(topicId)
			}
		});
	} catch(error: unknown) {
		if (error instanceof Error)
		throw error.message;
	}
}

export const createPhrase = async (body: string, topicId: number) => {
  return await prisma.phrases.create({
    data: {
      body: body,
			wordCount: Number(body.split(" ").length),
			topic: { connect: { id: topicId } },
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