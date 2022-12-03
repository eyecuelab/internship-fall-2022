import { Phrases, PrismaClient } from '@prisma/client';

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
				topicId: Number(topicId),
			}
		});
	} catch(error: unknown) {
		if (error instanceof Error)
		throw error.message;
	}
}

export const randomlyGeneratePhrase = (phrases: Phrases[]) => {
  let randomIndex = Math.floor(Math.random() * 8);
  const phrase = phrases[randomIndex];
  return phrase;
}

export const getUniquePhrase = async (topicId: number) => {
	const phrases = await prisma.phrases.findMany({
		where: {
			topicId: Number(topicId),
		}
	});

	let uniquePhrase = randomlyGeneratePhrase(phrases);

  const phraseAlreadyAssigned = (body: string) => {
    return phrases.some((phrase: Phrases) => phrase.body === body)
  }

  while (phraseAlreadyAssigned(uniquePhrase.body)) {
    uniquePhrase = randomlyGeneratePhrase(phrases);
    if (!phraseAlreadyAssigned) {
			return uniquePhrase;
    }
  }
	return uniquePhrase;
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