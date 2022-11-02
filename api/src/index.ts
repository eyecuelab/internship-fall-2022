import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';
import { Socket } from 'socket.io';

const prisma = new PrismaClient()
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:5173'
    ],
    methods: ['GET', 'POST']
  }
})

app.use(cors({ origin: [
  'http://localhost:5173'
], credentials: true}));

app.use(express.json())

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

io.on('connection', (socket : Socket) => {
  console.log('a user connected')
})

app.listen(3000, () =>
console.log('REST API server ready at: http://localhost:3000'),
)