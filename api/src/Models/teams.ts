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

export const randomlyGenerateTeam = () => {
	const teams = ['apple', 'blueberry', 'cherry', 'kiwi', 'lemon', 'peach', 'pear', 'strawberry']
  let randomIndex = Math.floor(Math.random() * 8);
  const teamName = teams[randomIndex];
  return teamName;
}

export const setUniqueTeam = async (gameId: number) => {
  const maxNumOfTeams = 5;
  const getTeamsInGame = await getTeamsByGame(gameId);
  let uniqueTeam = randomlyGenerateTeam();

  const teamAlreadyAssigned = (name: string) => {
    return getTeamsInGame.some((team: any) => team.teamName === name)
  }

  while (teamAlreadyAssigned(uniqueTeam)) {
    uniqueTeam = randomlyGenerateTeam();
		console.log('while');
    if (!teamAlreadyAssigned) {
			console.log('line 52 assign team: ', uniqueTeam);
			createTeam(uniqueTeam, gameId);
			return 0;
    } else if (teamAlreadyAssigned(uniqueTeam) && maxNumOfTeams === getTeamsInGame.length) {
      return 0;
    }
  }
	console.log('line 59 assign team: ', uniqueTeam);
	createTeam(uniqueTeam, gameId);
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