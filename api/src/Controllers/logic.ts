import { emitTimerTick } from "../Models/logic";
import io from "../server";

const ROUND_TIME = 300;

const logicControllers = {
	async startRound (req: any, res: any) {
		const { gameId } = req.body;
		const timer = 300;

		io.in(gameId.toString()).emit('start_round', timer);
		await startThisRound(gameId);
	},

	async addRoundTime (req: any, res: any) {
		const { gameId } = req.body;

		await addTime(gameId)
	}
}

export default logicControllers;

let timeRemaining = ROUND_TIME;

const startThisRound = async (gameId: number) => {
	const intervalId = setInterval(async () => {
		emitTimerTick(gameId, timeRemaining);
		if (timeRemaining === 0) {
			clearInterval(intervalId);
		} else {
			timeRemaining = timeRemaining - 1;
		}
	}, 1000);
}

const addTime = async (gameId: number) => {
	timeRemaining += 30;
}
