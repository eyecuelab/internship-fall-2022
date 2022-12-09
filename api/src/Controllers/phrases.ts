import { getPhrase, getUniquePhrase, createPhrase, deletePhrase, getSinglePhrase } from "../Models/phrases";

const phrasesControllers = {
  async getPhrase(req: any, res: any) {
    const { topicId } = req.params;
    const phrases = await getPhrase(Number(topicId));
    res.json(phrases);
  },

	async getOnePhrase (req: any, res: any) {
		const { topicId } = req.params;
		const phrase = await getUniquePhrase(Number(topicId));
		res.json(phrase);
	},

  async createPhrase(req: any, res: any) {
    const { body, topicId, moderatorId } = req.body;
    const newPhrase = await createPhrase(body, Number(topicId), Number(moderatorId));
    res.status(201).json(newPhrase);
  },

  async deletePhrase(req: any, res: any) {
    const { id } = req.params;
    const destroyPhrase = await deletePhrase(id);
    res.status(200).json({ destroyPhrase });
  },

  async getSinglePhrase(req: any, res: any) {
    const { id } = req.params;
    const phrase= await getSinglePhrase (id);
    res.json(phrase);
  },

};

export default phrasesControllers;
