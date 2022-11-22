import { getGames, createGame, deleteGame } from '../Models/games';
import io from '../server';
import Utility from './Utility';

const gamesControllers = {

  async getGames(req: any, res: any) {
    const users = await getGames();
    return res.json(users);
  },

	async createGame(req: any, res: any) {
		const { name } = req.body;

		const newGame = await createGame(name);

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