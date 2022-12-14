import { PrismaClient, Teams } from '@prisma/client';

const prisma = new PrismaClient();

export const getTeamsByGame = async (gameId: number) => {
  return await prisma.teams.findMany({
		where: {
			gameId: Number(gameId)
		},
		orderBy: {
			teamScore: 'desc',
		},
		include: {
			phrases: true,
			Turns: true,
			Haicues: true,
		}
	});
}

export const getTeamById = async (teamId: number) => {
	return await prisma.teams.findUnique({
		where: {
			id: Number(teamId)
		},
		include: {
			phrases: true,
			Turns: true,
			Haicues: true
		}
	});
}

export const getTeamNameByGame = async (name: string, gameId: number) => {
	return await prisma.teams.findFirst({
		where: {
			teamName: name,
			gameId: gameId,
		}
	});
}

export const createTeam = async (gameId: number) => {
	const teamName = await setUniqueTeam(gameId)
  return await prisma.teams.create({
    data: {
      teamName: teamName,
      teamScore: 0,
      game: { connect: { id: gameId } }
    }
  });
}

export const randomlyGenerateTeam = () => {
	const teams = ['apple', 'blueberry', 'cherry', 'kiwi', 'lemon', 'peach', 'pear']
  let randomIndex = Math.floor(Math.random() * 8);
  const teamName = teams[randomIndex];
  return teamName;
}

export const setUniqueTeam = async (gameId: number) => {
  const maxNumOfTeams = 8;
  const teamsInGame = await getTeamsByGame(gameId);
  let uniqueTeam = randomlyGenerateTeam();

  const teamAlreadyAssigned = (name: string) => {
    return teamsInGame.some((team: Teams) => team.teamName === name)
  }

  while (teamAlreadyAssigned(uniqueTeam)) {
    uniqueTeam = randomlyGenerateTeam();
    if (!teamAlreadyAssigned) {
			return uniqueTeam;
    } else if (teamAlreadyAssigned(uniqueTeam) && maxNumOfTeams === teamsInGame.length) {
      return 'ninth';
    }
  }
	return uniqueTeam;
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

export const addUniquePhrase = async (teamId: number, phraseId: number) => {
	return await prisma.phrases.update({
		where: {
			id: Number(phraseId)
		},
		data: {
			team: { connect: { id: Number(teamId) }}
		}
	})
} 

export const assignPoints = async (teamId: number, points: number) => {
	return await prisma.teams.update({
		where: {
			id: teamId
		},
		data: {
			teamScore: points
		}
	})
}