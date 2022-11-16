import gamesControllers from '../Controllers/games';
import express from "express";

const router = express.Router();

router.get('/games', gamesControllers.getGames);
router.post('/games', gamesControllers.createGame);

export default router; 