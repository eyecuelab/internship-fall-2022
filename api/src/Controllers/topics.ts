import { getTopics, createTopic } from "../Models/topics";
import io from "../server";
import Utility from "./Utility";

const topicsControllers = {
  async getTopic(req: any, res: any) {
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
};

export default topicsControllers;
