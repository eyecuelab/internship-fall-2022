import app from './app';
import { Socket } from 'socket.io';

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: [
      '*',
      'http://localhost:5173',
			'https://www.thunderclient.com'
    ],
    methods: ['GET', 'POST', 'DELETE']
  }
});

io.on('connection', (socket : Socket) => {
  console.log('a user connected');
  io.emit('connection');
});

export default io;

server.listen(3000, () =>
  console.log('Server ready at: http://localhost:3000'),
)