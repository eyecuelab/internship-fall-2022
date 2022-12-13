import roundsControllers from '../Controllers/rounds';
import express from "express";

const router = express.Router();

router.get('/round/:id', roundsControllers.getRoundById);
router.get('/round/game/:id', roundsControllers.getCurRoundByGame);
router.post('/round', roundsControllers.assignRoundToGame);

export default router;