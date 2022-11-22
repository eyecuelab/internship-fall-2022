import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTopics = async () => {
  return await prisma.topics.findMany();
}

export const createTopic = async (topicName: string) => {
  return await prisma.topics.create({
    data: {
      name: topicName
    }
  });
}