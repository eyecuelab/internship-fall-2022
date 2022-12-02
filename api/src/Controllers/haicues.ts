import { getHaicues, getOneHaicue, getRoundHaicues, createHaicues, updateHaicue } from '../Models/haicues';
import io from '../server';

const haicuesControllers = {

  async getHaicue(req: any, res: any) {
    const haicues = await getHaicues();
    return res.json(haicues);
  },

	async getHaicueById(req: any, res: any) {
		const { id } = req.params;
		const haicue = await getOneHaicue(id);
		return res.json(haicue);
	},

	async getHaicuesByRound(req: any, res: any) {
		const { id } = req.params;
		const haicues = await getRoundHaicues(id);
		return res.json(haicues);
	},

	async createHaicue(req: any, res: any) {
		const { line1, line2, line3 } = req.body;
		const haicue = await createHaicues(1, 1, line1, line2, line3);
		io.emit("create_haicue", haicue);
		res.status(201).json(haicue);
	},

	async resubmitHaicue(req: any, res: any) {
		const { haicueId, line1, line2, line3 } = req.body;
		const haicue = await updateHaicue(haicueId, line1, line2, line3);
		res.status(201).json(haicue);
	}

}

export default haicuesControllers;