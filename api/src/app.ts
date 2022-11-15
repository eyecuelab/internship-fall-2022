import teamsRouter from "./Routes/teams";
import usersRouter from "./Routes/users";
import haicuesRouter from "./Routes/haicues";
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors({
  origin: [
    '*',
    'http://localhost:5173',
		'https://www.thunderclient.com'
  ], 
  methods: ['GET', 'POST']}));

app.use(express.json());

app.use(teamsRouter, usersRouter, haicuesRouter);

export default app;
