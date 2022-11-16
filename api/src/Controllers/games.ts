import { getGames, createGame } from '../Models/games';
import io from '../server';
import Utility from './Utility';

const gamesControllers = {

  async getGames(req: any, res: any) {
    const users = await getGames();
    return res.json(users);
  },

	async createGame(req: any, res: any) {
		const { joinCode } = req.body;

		const newGame = await createGame(joinCode);

		io.emit("create_game", newGame.id);
		res.status(201).json(newGame);
	},

}

export default gamesControllers;