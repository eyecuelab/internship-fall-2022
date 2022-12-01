import { emitTimerTick } from "../Models/logic";
import io from "../server";

const ROUND_TIME = 60;

const logicControllers = {
	async startRound (req: any, res: any) {
		const { gameId } = req.body;
		startThisRound(gameId);
		res.json(200);
	},

	async addRoundTime (req: any, res: any) {
		const { gameId } = req.body;

		await addTime(gameId)
	}
}

export default logicControllers;

let timeRemaining = ROUND_TIME;

const startThisRound = (gameId: number) => {
	const intervalId = setInterval(async () => {
		emitTimerTick(gameId, timeRemaining);
		if (timeRemaining === 0) {
			clearInterval(intervalId);
		} else {
			timeRemaining = timeRemaining - 1;
		}
	}, 1000);

	if (timeRemaining === 0) {
		timeRemaining = ROUND_TIME;
	}
}

const addTime = async (gameId: number) => {
	timeRemaining += 30;
}
