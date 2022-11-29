import { getTeams, createTeam } from '../Models/teams';
import io from '../server';

const teamsControllers = {

  async getTeam(req: any, res: any) {
    const teams = await getTeams();
    return res.json(teams);
  },

	async createTeam(req: any, res: any) {
		const { teamName } = req.body;
			const newTeam = await createTeam(teamName);
			res.status(201).json(newTeam);

	},
}

export default teamsControllers;