import io from "../server";

const logicControllers = {
		async startRound (req: any, res: any) {
		const { gameId } = req.body;
		const timer = 300;

		io.in(gameId.toString()).emit('start_round', timer);
	}
}

export default logicControllers;
