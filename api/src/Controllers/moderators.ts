import { getModeratorByEmail, createModerator } from '../Models/moderators';

const moderatorsControllers = {

  async getModeratorByEmail(req: any, res: any) {
		const { email } = req.params;
    const moderators = await getModeratorByEmail(email);
    return res.json(moderators);
  },

	async createModerator(req: any, res: any) {
		const { email } = req.body;
		const newModerator = await createModerator(email);
		res.status(201).json(newModerator);
	},

}

export default moderatorsControllers;