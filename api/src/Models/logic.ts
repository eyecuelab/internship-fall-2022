import io from "../server";

export const emitStartRound = (gameId: number) => {
	const timer = 300;
	io.in(gameId.toString()).emit('start_round', timer);
}

export const emitTimerTick = (gameId: number, timeRemaining: number) => {
	io.emit('tick', timeRemaining); //.in(gameId.toString())
}