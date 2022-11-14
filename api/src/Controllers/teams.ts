import { getTeams, createTeam } from '../Models/teams';
import io from '../server';
import Utility from './Utility';

const teamsControllers = {

  async getTeams(req: any, res: any) {
    const teams = await getTeams();
    return res.json(teams);
  },

	async createTeam(req: any, res: any) {
		const { teamName } = req.body;

		if (Utility.validateInputs(res, "Invalid body parameters"/*, teamName*/)) {
			const newTeam = await createTeam(teamName);
			// req.session.teamId = newTeam.id;

			io.emit("create_team", newTeam.teamName);
			// io.to(gameId.toString()).emit("player_joined_lobby_chat", teamName);
			res.status(201).json(newTeam);
		}
	},

}

export default teamsControllers;