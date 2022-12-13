import { getHaicues, getHaicueByTeamRound, getHaicuesByRound, createHaicue, resubmitHaicue } from '../Models/haicues';
import io from '../server';

const haicuesControllers = {

  async getHaicues(req: any, res: any) {
    const haicues = await getHaicues();
    return res.json(haicues);
  },

	async getHaicueByTeamRound(req: any, res: any) {
		const { roundId, teamId } = req.params;
		const haicue = await getHaicueByTeamRound(roundId, teamId);
		return res.json(haicue);
	},

	async getHaicuesByRound(req: any, res: any) {
		const { id } = req.params;
		const haicues = await getHaicuesByRound(id);
		return res.json(haicues);
	},

	async createHaicue(req: any, res: any) {
		const { roundId, teamId, phraseId, line1, line2, line3 } = req.body;
		const haicue = await createHaicue(roundId, teamId, phraseId, line1, line2, line3);
		res.status(201).json(haicue);
	},

	async resubmitHaicue(req: any, res: any) {
		const { id, line1, line2, line3 } = req.body;
		const haicue = await resubmitHaicue(id, line1, line2, line3);
		res.status(201).json(haicue);
	}

}

export default haicuesControllers;