import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsers = async () => {
  return await prisma.users.findMany();
}

export const createUser = async (userName: string) => {
  return await prisma.users.create({
    data: {
      name: userName,
      role: { connect: { id: 1 } },
      team: {}
    }
  });
}
