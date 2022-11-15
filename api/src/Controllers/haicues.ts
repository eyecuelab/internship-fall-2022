import { getHaicues, createHaicues } from '../Models/haicues';
import io from '../server';
import Utility from './Utility';

const haicuesControllers = {

  async getHaicue(req: any, res: any) {
    const haicues = await getHaicues();
    return res.json(haicues);
  },

	async createHaicue(req: any, res: any) {
		const { line1, line2, line3 } = req.body;

		if (Utility.validateInputs(res, "Invalid body parameters")) {
			const haicue = await createHaicues(1, 1, line1, line2, line3);

			io.emit("create_haicue", haicue);
			res.status(201).json(haicue);
		}
	},

}

export default haicuesControllers;