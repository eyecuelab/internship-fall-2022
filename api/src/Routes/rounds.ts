import roundsControllers from '../Controllers/rounds';
import express from "express";

const router = express.Router();

router.post('/addRound', roundsControllers.assignRoundToGame);

export default router;