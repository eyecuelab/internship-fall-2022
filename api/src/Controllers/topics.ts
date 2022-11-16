import { getTopics, createTopic } from '../Models/topics';
import io from '../server';
import Utility from './Utility';

const topicsControllers = {

  async getTopic(req: any, res: any) {
    const topics = await getTopics();
    return res.json(topics);
  },

	async createTopic(req: any, res: any) {
		const { topicName } = req.body;

		if (Utility.validateInputs(res, "Invalid body parameters", topicName)) {
			const newTopic = await createTopic(topicName);

			io.emit("create_topic", newTopic.name);
			res.status(201).json(newTopic);
		}
	},

}

export default topicsControllers;