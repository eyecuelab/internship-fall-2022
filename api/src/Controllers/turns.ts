import { createTurn, getTurn, getTurnsByRound, updatePresentingTeam } from '../Models/turns';

const turnsControllers = {
	async getRoundTurns(req: any, res: any) {
		const { id } = req.params;
		const turns = await getTurnsByRound(id);
		return res.json(turns)
	},

	async getTurn(req: any, res: any) {
		const { id } = req.params;
		const turn = await getTurn(id);
		return res.json(turn);
	},

	async createTurn(req: any, res: any) {
		const { roundId, presentingTeamId, haicueId } = req.body;
		const turn = await createTurn(roundId, presentingTeamId, haicueId);
		return res.status(201).json(turn);
	},

	async setPresentingTeam(req: any, res: any) {
		const { roundId, teamId } = req.body;
		const presentingTeam = await updatePresentingTeam(roundId, teamId);
		return res.status(201).json(presentingTeam);
	}
}

export default turnsControllers