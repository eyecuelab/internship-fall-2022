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

// model Users {
//   id      Int    @id @default(autoincrement())
//   name    String
//   role    Roles  @relation(fields: [roleId], references: [id])
//   roleId  Int
//   team    Teams? @relation(fields: [teamId], references: [id])
//   teamId  Int?
//   game    Games? @relation(fields: [gameId], references: [id])
//   gameId  Int?
// }