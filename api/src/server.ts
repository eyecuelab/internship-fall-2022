import app from './app';
import { Socket } from 'socket.io';

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:5173'
    ],
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket : Socket) => {
  console.log('a user connected')
})

server.listen(3000, () =>
  console.log('Server ready at: http://localhost:3000'),
)