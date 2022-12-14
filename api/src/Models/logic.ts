import io from "../server";

export const startThisGame = (gameId: number) => {
	const timer = 240;
	io.emit('start_game'); //.in(gameId.toString())
	setTimeout(() => io.emit('start_round', timer), 5000); //.in(gameId.toString())
}

export const emitStartRound = (gameId: number) => {
	const timer = 240;
	io.in(gameId.toString()).emit('start_round', timer);
}

export const emitTimerTick = (gameId: number, timeRemaining: number) => {
	io.emit('tick', timeRemaining); //.in(gameId.toString())
}

export const startGuessingPhase = (gameId: number) => {
	io.emit('start_guessing'); //.in(gameId.toString())
}