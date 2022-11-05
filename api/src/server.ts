import app from './app';
import { Socket } from 'socket.io';

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: [
      '*'
    ],
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket : Socket) => {
  console.log('a user connected');
  io.emit('connection');

  socket.on('create_team', (teamName) => {
    io.emit('create_team', teamName);
  });
});

export default io;

server.listen(3000, () =>
  console.log('Server ready at: http://localhost:3000'),
)