import { addRound, getOneRound, getCurRoundIdByGameId } from '../Models/rounds';

const roundsControllers = {
	async getRound (req: any, res: any) {
		const { id } = req.params;
		const round = await getOneRound(id);
		return res.json(round)
	},

	async getCurRoundsByGameId(req: any, res: any) {
		const { id } = req.params;
		const CurRound = await getCurRoundIdByGameId(id);
		return res.json(CurRound);
	},

	async assignRoundToGame(req: any, res: any) {
		const { gameId, topicId } = req.body;
		const newRound = await addRound(gameId, topicId);
		res.status(201).json(newRound);
	}
}

export default roundsControllers;
