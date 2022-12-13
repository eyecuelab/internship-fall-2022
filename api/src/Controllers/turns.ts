import { createTurn, getTurnById, getTurnsByRound, setPresentingTeam } from '../Models/turns';

const turnsControllers = {
	async getTurnsByRound(req: any, res: any) {
		const { id } = req.params;
		const turns = await getTurnsByRound(id);
		return res.json(turns)
	},

	async getTurnById(req: any, res: any) {
		const { id } = req.params;
		const turn = await getTurnById(id);
		return res.json(turn);
	},

	async createTurn(req: any, res: any) {
		const { roundId, presentingTeamId, haicueId } = req.body;
		const turn = await createTurn(roundId, presentingTeamId, haicueId);
		return res.status(201).json(turn);
	},

	async setPresentingTeam(req: any, res: any) {
		const { roundId, teamId } = req.body;
		const presentingTeam = await setPresentingTeam(roundId, teamId);
		return res.status(201).json(presentingTeam);
	}
}

export default turnsControllers