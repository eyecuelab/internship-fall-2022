import app from './app';
import http from 'http';
import { Socket, Server } from 'socket.io';
import { setTeamSocketId } from './Models/teams';

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      '*',
      'http://localhost:5173',
			'https://www.thunderclient.com'
    ],
    methods: ['GET', 'POST', 'DELETE', 'PUT']
  }
});

const getSocketRooms = (socket: Socket) => {
	let rooms: string[] = [];
	socket.rooms.forEach((room) => {
		if (room !== socket.id) {
			rooms.push(room);
		}
	});

	return rooms;
}

const handleJoinGame = (socket: Socket, gameId: number, teamId: number) => {
	try {
		setTeamSocketId(teamId, socket.id);
		if (socket.rooms.size > 0) {
			const rooms = getSocketRooms(socket);
			rooms.forEach((room) => {
				socket.leave(room);
			});
		}
		socket.join(gameId.toString());
	} catch (error) {
		console.log(error instanceof Error ? error.message : error);
	}
}

io.on('connection', (socket : Socket) => {
	socket.on('join', (gameId: number, teamId: number) => {
		handleJoinGame(socket, gameId, teamId);
	})
  console.log('a user connected');
  io.emit('connection');

	socket.on("start_new_game", () => {
		const rooms = getSocketRooms(socket);
		console.log("starting game...");
		if (rooms.length !== 1) { 
			if (rooms.length === 0)
				throw new Error("Start game on unassigned socket");
			else
				throw new Error("Socket joined multiple games");
		} else {
			io.in(rooms[0]).emit("game_start");
		}
	});

	socket.on('buzz', () => {
		io.emit('buzz');
	});

	socket.on('buzzer_refresh', () => {
		io.emit('buzzer_refresh')
	});
});

export default io;

server.listen(3000, () =>
  console.log('Server ready at: http://localhost:3000'),
)
