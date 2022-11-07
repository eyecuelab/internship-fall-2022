import teamsRouter from "./Routes/teams";
import usersRouter from "./Routes/users";
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors({
  origin: [
    '*',
    'http://localhost:5173'
  ], 
  methods: ['GET', 'POST']}));

app.use(express.json());

app.use(teamsRouter, usersRouter);

export default app;
