import { emitTimerTick } from "../Models/logic";
import io from "../server";

const ROUND_TIME = 180;

const logicControllers = {
	async startRound (req: any, res: any) {
		const { gameId } = req.body;
		startThisRound(gameId);
		res.json(200);
	},

	async addRoundTime (req: any, res: any) {
		const { gameId } = req.body;
		await addTime(gameId);
		res.json(200);
	},

	async buzzerRefresh (req: any, res: any) {
		const { gameId } = req.body;
//		io.except(['buzzed_user1', 'buzzed_user2', 'etc...']).emit('buzzer_refresh');
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
	if (timeRemaining === 0) {
		timeRemaining = 30;
	} else {
		timeRemaining += 30;
	}
	startThisRound(gameId);
}
