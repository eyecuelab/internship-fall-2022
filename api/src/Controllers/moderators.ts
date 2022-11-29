import { getModerators, createModerator } from '../Models/moderators';
import io from '../server';

const moderatorsControllers = {

  async getModerators(req: any, res: any) {
		const { email } = req.params;
    const moderators = await getModerators(email);
    return res.json(moderators);
  },

	async createModerator(req: any, res: any) {
		const { email } = req.body;

		const newModerator = await createModerator(email);

		io.emit("create_moderator", newModerator.id);
		res.status(201).json(newModerator);
	},

}

export default moderatorsControllers;