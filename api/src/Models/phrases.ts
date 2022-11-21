import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Phrase = {
	id: number
  body: String
  wordCount: number
  topic: any
  topicId: number
}

export const getPhrase = async (id: number) => {
  try {
		return await prisma.phrases.findUnique({
			where: {
				// @ts-ignore
				topicId: Number(id)
			}
		});
	} catch(error: unknown) {
		if (error instanceof Error)
		throw error.message;
	}
}

export const createPhrase = async (phraseName: string) => {
  return await prisma.phrases.create({
    data: {
      body: phraseName,
			wordCount: Number(phraseName.split(" ").length),
			topic: { connect: { id: 1 } },
    }
  });
}