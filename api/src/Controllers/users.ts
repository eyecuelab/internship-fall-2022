import { getUsers, createUser } from '../Models/users';
import io from '../server';
import Utility from './Utility';

const usersControllers = {

  async getUsers(req: any, res: any) {
    const users = await getUsers();
    return res.json(users);
  },

	async createUser(req: any, res: any) {
		const { userName } = req.body;

		const newUser = await createUser(userName);
		// req.session.userId = newUser.id;

		io.emit("create_user", newUser.id);
		// io.to(gameId.toString()).emit("player_joined_lobby_chat", userName);
		res.status(201).json(newUser);
	},

}

export default usersControllers;