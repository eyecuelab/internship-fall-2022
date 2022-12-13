import { addRound, getRoundById, getCurRoundByGame } from '../Models/rounds';

const roundsControllers = {
	async getRoundById (req: any, res: any) {
		const { id } = req.params;
		const round = await getRoundById(id);
		return res.json(round)
	},

	async getCurRoundByGame(req: any, res: any) {
		const { id } = req.params;
		const CurRound = await getCurRoundByGame(id);
		return res.json(CurRound);
	},

	async assignRoundToGame(req: any, res: any) {
		const { gameId, topicId } = req.body;
		const newRound = await addRound(gameId, topicId);
		res.status(201).json(newRound);
	}
}

export default roundsControllers;
