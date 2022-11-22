import { deletePhrase, getPhrases, createPhrase } from '../Models/phrases';
import io from '../server';
import Utility from './Utility';

const phrasesControllers = {

  async getPhrase(req: any, res: any) {
    const phrases = await getPhrases();
    return res.json(phrases);
  },

	async createPhrase(req: any, res: any) {
		const { phraseName } = req.body;

		if (Utility.validateInputs(res, "Invalid body parameters", phraseName)) {
			const newPhrase = await createPhrase(phraseName);

			io.emit("create_phrase", newPhrase.body);
			res.status(201).json(newPhrase);
		}
	},

	async deletePhrase(req: any, res: any){
		const { id } = req.params;
		const destroyPhrase = await deletePhrase(id);
		// io.in(gameId.toString()).emit('player_left', deletedPlayer.id);
		// io.in(gameId.toString()).emit('player_left_chat', deletedPlayer.name);
		// const players = await getPlayersByGameId(gameId);
		res.status(200).json({ destroyPhrase })
	}
}

export default phrasesControllers;