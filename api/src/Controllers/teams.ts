import { getTeamsByGame, setUniqueTeam, getTeamById, createTeam } from '../Models/teams';

const teamsControllers = {
  async getTeams(req: any, res: any) {
		const { gameId } = req.params;
    const teams = await getTeamsByGame(gameId);
    return res.json(teams);
  },

	async getOneTeam(req: any, res: any) {
		const { teamId } = req.params;
		const team = await getTeamById(teamId);
		return res.json(team);
	},

	async createUniqueTeam(req: any, res: any) {
		const { gameId } = req.body;
			const newTeam = await createTeam(gameId);
			res.status(201).json(newTeam);
	},
}

export default teamsControllers;