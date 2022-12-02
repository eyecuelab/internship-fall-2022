import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTeamsByGame = async (gameId: number) => {
  return await prisma.teams.findMany({
		where: {
			gameId: Number(gameId)
		}
	});
}

export const getTeamById = async (teamId: number) => {
	return await prisma.teams.findUnique({
		where: {
			id: Number(teamId)
		}
	});
}

export const createTeam = async (teamName: string, gameId: number) => {
  return await prisma.teams.create({
    data: {
      teamName: teamName,
      teamScore: 0,
      game: { connect: { id: gameId } }
    }
  });
}

export const setTeamSocketId = async (teamId: number, socketId: string) => {
	try {
		return await prisma.teams.update({
			where: { id: teamId },
			data: {
				socketId: socketId
			}
		});
	} catch (error) {
		throw error;
	}
}

export const getTeamBySocketId = async (socketId: string) => {
	return await prisma.teams.findFirst({
		where: { socketId: socketId }
	})
}