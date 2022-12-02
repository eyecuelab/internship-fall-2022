import { getGameById, getGameByCode, getGameByModerator, createGame, deleteGame, updateGameStatus } from '../Models/games';

const gamesControllers = {

  async getGameById(req: any, res: any) {
		const { id } = req.params;
    const game = await getGameById(id);
    return res.json(game);
  },

	async getGameByCode(req: any, res: any) {
		const { code } = req.params;
		const game = await getGameByCode(code);
		return res.json(game);
	},

  async getGameByModerator(req: any, res: any) {
		const { moderatorId } = req.params;
    const games = await getGameByModerator(Number(moderatorId));
    return res.json(games);
  },

	async createGame(req: any, res: any) {
		const { name, moderatorId } = req.body;
		const newGame = await createGame(name, moderatorId);
		res.status(201).json(newGame);
	},

	async deleteGame(req: any, res: any) {
		const { id } = req.params;
		const destroyGame = await deleteGame(id);
		res.status(200).json({destroyGame})
	},

	async updateGameStatus(req: any, res: any) {
		const { id } = req.params;
		const updateGame = await updateGameStatus(id);
		res.status(200).json(updateGame);
	},

}

export default gamesControllers;