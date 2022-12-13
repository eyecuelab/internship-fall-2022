import { PrismaClient, Teams } from '@prisma/client';

const prisma = new PrismaClient();

export const createUniqueTeam = async (gameId: number) => {
	const teamName = await setUniqueTeam(gameId)
  return await prisma.teams.create({
    data: {
      name: teamName,
      points: 0,
      Game: { connect: { id: gameId } }
    }
  });
}

export const getTeamsByGame = async (gameId: number) => {
  return await prisma.teams.findMany({
		where: {
			gameId: Number(gameId)
		},
		orderBy: {
			points: 'desc',
		},
		include: {
			Phrases: true,
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
			Phrases: true,
			Turns: true,
			Haicues: true
		}
	});
}

export const getTeamNameByGame = async (name: string, gameId: number) => {
	return await prisma.teams.findFirst({
		where: {
			name: name,
			gameId: gameId,
		}
	});
}

export const getTeamBySocketId = async (socketId: string) => {
	return await prisma.teams.findFirst({
		where: { socketId: socketId }
	})
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

export const addUniquePhrase = async (teamId: number, phraseId: number) => {
	return await prisma.phrases.update({
		where: {
			id: Number(phraseId)
		},
		data: {
			Team: { connect: { id: Number(teamId) }}
		}
	})
} 

export const assignPoints = async (teamId: number, points: number) => {
	return await prisma.teams.update({
		where: {
			id: teamId
		},
		data: {
			points: points
		}
	})
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
    return teamsInGame.some((team: Teams) => team.name === name)
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