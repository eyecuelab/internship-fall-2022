import gamesControllers from '../Controllers/games';
import express from "express";

const router = express.Router();

router.get('/game/:id', gamesControllers.getGameById);
router.get('/game/room/:code', gamesControllers.getGameByCode);
router.get('/games/moderator/:moderatorId', gamesControllers.getGamesByModerator);
router.post('/game', gamesControllers.createGame);
router.delete('/game/:id', gamesControllers.deleteGame);
router.put('/game/:id', gamesControllers.publishGame);

export default router; 