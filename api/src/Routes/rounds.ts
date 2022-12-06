import roundsControllers from '../Controllers/rounds';
import express from "express";

const router = express.Router();

router.get('/rounds/games/:id', roundsControllers.getCurRoundsByGameId);
router.post('/round', roundsControllers.assignRoundToGame);

export default router;