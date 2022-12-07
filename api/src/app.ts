import teamsRouter from "./Routes/teams";
import haicuesRouter from "./Routes/haicues";
import topicsRouter from "./Routes/topics";
import phrasesRouter from "./Routes/phrases";
import gamesRouter from "./Routes/games";
import moderatorsRouter from "./Routes/moderators";
import roundsRouter from "./Routes/rounds";
import turnsRouter from "./Routes/turns";
import logicRouter from "./Routes/logic";
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors({
  origin: [
    '*',
		'https://haicue.com',
    'http://localhost:5173',
		'https://www.thunderclient.com',
		'https://haicue-pikachu-api.fly.dev'
  ], 
  methods: ['GET', 'POST', 'DELETE', 'PUT'], 
	credentials: true,}));

app.use(express.json());

app.use(
	teamsRouter,
	haicuesRouter,
	topicsRouter,
	phrasesRouter,
	gamesRouter,
	moderatorsRouter,
	roundsRouter,
	turnsRouter,
	logicRouter
);

export default app;
