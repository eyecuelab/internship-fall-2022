import { getPhrases, createPhrase } from '../Models/phrases';
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

}

export default phrasesControllers;