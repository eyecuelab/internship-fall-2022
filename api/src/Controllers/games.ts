import { getGames, createGame, deleteGame } from '../Models/games';
import io from '../server';

const gamesControllers = {

  async getGames(req: any, res: any) {
    const games = await getGames();
    return res.json(games);
  },

	async createGame(req: any, res: any) {
		const { name, moderatorId } = req.body;

		const newGame = await createGame(name, moderatorId);

		io.emit("create_game", newGame.id);
		res.status(201).json(newGame);
	},

	async deleteGame(req: any, res: any) {
		const { id } = req.params;
		const destroyGame = await deleteGame(id);
		res.status(200).json({destroyGame})
	}

}

export default gamesControllers;