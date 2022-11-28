import gamesControllers from '../Controllers/games';
import express from "express";

const router = express.Router();

router.get('/games', gamesControllers.getGames);
router.post('/games', gamesControllers.createGame);
router.delete('/games/:id', gamesControllers.deleteGame);
router.put('/games/:id', gamesControllers.updateGameStatus);

export default router; 