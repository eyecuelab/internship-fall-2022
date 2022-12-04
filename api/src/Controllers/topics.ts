import { getTopic, getTopics, getRoundTopic, createTopic, deleteTopic } from "../Models/topics";
import io from "../server";

const topicsControllers = {
	async getTopic(req: any, res: any) {
		const { topicId } = req.params;
		const topic = await getTopic(topicId);
		return res.json(topic);
	},

  async getTopics(req: any, res: any) {
		const { gameId } = req.params;
    const topics = await getTopics(gameId);
    return res.json(topics);
  },

	async getTopicByRound(req: any, res: any) {
		const { roundId } = req.params;
		const topic = await getRoundTopic(roundId);
	},

  async createTopic(req: any, res: any) {
    const { name, gameId, moderatorId } = req.body;
		const newTopic = await createTopic(name, gameId, moderatorId);
		res.status(201).json(newTopic);
  },

  async deleteTopic(req: any, res: any) {
    const { id } = req.params;
    const destroyTopic = await deleteTopic(id);
    res.status(200).json({ destroyTopic });
  },


};

export default topicsControllers;
