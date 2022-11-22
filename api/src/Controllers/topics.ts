import { getTopic, getTopics, createTopic, deleteTopic } from "../Models/topics";
import io from "../server";
import Utility from "./Utility";

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

  async createTopic(req: any, res: any) {
    const { name, gameId } = req.body;

    // if (Utility.validateInputs(res, "Invalid body parameters", name)) {
      const newTopic = await createTopic(name, gameId);

      io.emit("create_topic", newTopic.name);
      res.status(201).json(newTopic);
    // }
  },

  async deleteTopic(req: any, res: any) {
    const { id } = req.params;
    const destroyTopic = await deleteTopic(id);
    res.status(200).json({ destroyTopic });
  },


};

export default topicsControllers;
