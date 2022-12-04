import { addRound } from '../Models/rounds';

const roundsControllers = {
	async assignRoundToGame(req: any, res: any) {
		const { gameId, topicId } = req.body;
		const newRound = await addRound(gameId, topicId);
		res.status(201).json(newRound);
	}
}

export default roundsControllers;