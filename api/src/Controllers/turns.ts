import { createTurn, getTurn, updatePresentingTeam } from '../Models/turns';

const turnsControllers = {
	async getTurn(req: any, res: any) {
		const { id } = req.params;
		const turn = await getTurn(id);
		return res.json(turn);
	},

	async createTurn(req: any, res: any) {
		const { roundId, presentingTeamId } = req.body;
		const turn = await createTurn(roundId, presentingTeamId);
		return res.status(201).json(turn);
	},

	async setPresentingTeam(req: any, res: any) {
		const { roundId, teamId } = req.body;
		const presentingTeam = await updatePresentingTeam(roundId, teamId);
		return res.status(201).json(presentingTeam);
	}
}

export default turnsControllers