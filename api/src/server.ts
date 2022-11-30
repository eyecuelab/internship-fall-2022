import app from './app';
import http from 'http';
import { Socket, Server } from 'socket.io';

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

io.on('connection', (socket : Socket) => {
  console.log('a user connected');
  io.emit('connection');

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