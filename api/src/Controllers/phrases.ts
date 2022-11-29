import { deletePhrase, getPhrase, createPhrase } from "../Models/phrases";

import io from "../server";

const phrasesControllers = {
  async getPhrase(req: any, res: any) {
    const { topicId, moderatorId } = req.params;
    const phrases = await getPhrase(Number(topicId));
    return res.json(phrases);
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
};

export default phrasesControllers;
