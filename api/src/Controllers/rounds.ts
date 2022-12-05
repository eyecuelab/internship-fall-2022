import { addRound, getCurRoundIdByGameId } from '../Models/rounds';

const roundsControllers = {
	async assignRoundToGame(req: any, res: any) {
		const { gameId, topicId } = req.body;
		const newRound = await addRound(gameId, topicId);
		res.status(201).json(newRound);
	},

	async getCurRoundsByGameId(req: any, res: any) {
		const { id } = req.params;
		const CurRound = await getCurRoundIdByGameId(id);
		return res.json(CurRound);
	}
}

export default roundsControllers;