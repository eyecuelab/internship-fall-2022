import { getTopicById, getTopicsByGame, getTopicByRound, createTopic, assignTopicToRound, deleteTopic } from "../Models/topics";

const topicsControllers = {
	async getTopicById(req: any, res: any) {
		const { topicId } = req.params;
		const topic = await getTopicById(topicId);
		return res.json(topic);
	},

  async getTopicsByGame(req: any, res: any) {
		const { gameId } = req.params;
    const topics = await getTopicsByGame(gameId);
    return res.json(topics);
  },

	async getTopicByRound(req: any, res: any) {
		const { roundId } = req.params;
		const topic = await getTopicByRound(roundId);
		return res.json(topic);
	},

  async createTopic(req: any, res: any) {
    const { name, gameId, moderatorId } = req.body;
		const newTopic = await createTopic(name, gameId, moderatorId);
		res.status(201).json(newTopic);
  },

	async assignTopicToRound(req: any, res: any) {
		const { topicId, roundId } = req.body;
		const topic = await assignTopicToRound(topicId, roundId);
		res.status(201).json(topic);
	},

  async deleteTopic(req: any, res: any) {
    const { id } = req.params;
    const destroyTopic = await deleteTopic(id);
    res.status(200).json({ destroyTopic });
  },

};

export default topicsControllers;
