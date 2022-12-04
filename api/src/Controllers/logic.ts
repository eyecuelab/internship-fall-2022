import { startThisGame, emitTimerTick, startGuessingPhase } from "../Models/logic";
import io from "../server";

const ROUND_TIME = 300;
let timeStart = false;

const logicControllers = {
	async startGame (req: any, res: any) {
		const { gameId } = req.body;
		startThisGame(gameId);
		setTimeout(() =>startThisRound(gameId), 5000);
		res.json(200);
	},
	
	async startTime (req: any, res: any) {
		timeStart = false;
		const { gameId } = req.body;
		startThisRound(gameId);
		res.json(200);
	},

	async addRoundTime (req: any, res: any) {
		const { gameId } = req.body;
		await addTime(gameId);
		res.json(200);
	},

	async startGuessing (req: any, res: any) {
		const { gameId } = req.body;
		timeRemaining = 0;
		await startGuessingPhase(gameId);
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
	timeStart = true;
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
		timeStart ? timeRemaining += 30 : null;
	}
}
