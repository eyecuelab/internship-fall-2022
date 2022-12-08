import { getTeamsByGame, getTeamById, createTeam, addUniquePhrase, assignPoints } from '../Models/teams';

const teamsControllers = {
  async getTeams(req: any, res: any) {
		const { gameId } = req.params;
    const teams = await getTeamsByGame(gameId);
    return res.json(teams);
  },

	async getOneTeam(req: any, res: any) {
		const { id } = req.params;
		const team = await getTeamById(id);
		return res.json(team);
	},

	async createUniqueTeam(req: any, res: any) {
		const { gameId } = req.body;
			const newTeam = await createTeam(gameId);
			res.status(201).json(newTeam);
	},

	async addPhrase(req: any, res: any) {
		const { teamId, phraseId } = req.body;
		const teamWithPhrase = await addUniquePhrase(teamId, phraseId);
		res.status(201).json(teamWithPhrase);
	},

	async addPoints(req: any, res: any) {
		const { teamId, points } = req.body;
		const teamWithPoints = await assignPoints(teamId, points);
		res.status(201).json(teamWithPoints);
	}
}

export default teamsControllers;