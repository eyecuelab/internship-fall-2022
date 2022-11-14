import { getHaicue, createHaicue } from '../Models/haicue';
import io from '../server';
import Utility from './Utility';

const haicuesControllers = {

  async getHaicue(req: any, res: any) {
    const haicues = await getHaicue();
    return res.json(haicues);
  },

	async createHaicue(req: any, res: any) {
		const { roundId, team, line1, line2, line3 } = req.body;

		if (Utility.validateInputs(res, "Invalid body parameters"/*, teamName*/)) {
			const haicue = await createHaicue(roundId, team, line1, line2, line3);
			// req.session.teamId = newTeam.id;

			io.emit("create_haicue", haicue);
			// io.to(gameId.toString()).emit("player_joined_lobby_chat", teamName);
			res.status(201).json(haicue);
		}
	},

}

export default haicuesControllers;