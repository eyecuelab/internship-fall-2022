import app from './app';
import http from 'http';
import { Socket, Server } from 'socket.io';
import { Teams } from '@prisma/client';

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:5173',
      'http://localhost:4173',
			'https://fancy-liger-5c83e4.netlify.app',
			'https://haicue.com',
			'https://www.thunderclient.com',
			'https://haicue-pikachu-api.fly.dev',

    ],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
		
  }
});

io.on('connection', (socket : Socket) => {
  io.emit('connection');

	socket.on('submit', () => {
		io.emit('submit');
	});

	socket.on('start_guessing', () => {
		io.emit('start_guessing');
	});

	socket.on('presenting', (team) => {
		io.emit('presenting', team);
	});

	socket.on('buzz', (team: Teams) => {
		io.emit('buzz', team);
	});

	socket.on('buzzer_refresh', () => {
		io.emit('buzzer_refresh');
	});

	socket.on('end_round', () => {
		io.emit('end_round');
	});

	socket.on('end_game', () => {
		io.emit('end_game');
	})
});

export default io;

server.listen(3000, () =>
  console.log('Server ready at: http://localhost3000'),
)
