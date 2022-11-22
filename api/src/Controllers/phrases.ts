import { getPhrase, createPhrase } from '../Models/phrases';
import io from '../server';
import Utility from './Utility';

const phrasesControllers = {
  async getPhrase(req: any, res: any) {
		const { topicId } = req.params;
    const phrases = await getPhrase(Number(topicId));
    return res.json(phrases);
  },

	async createPhrase(req: any, res: any) {
		const { body, topicId } = req.body;

		const newPhrase = await createPhrase(body, Number(topicId));

		io.emit("create_phrase", newPhrase.body);
		res.status(201).json(newPhrase);

	},
}

export default phrasesControllers;