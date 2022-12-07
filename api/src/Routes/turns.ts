import turnsControllers from '../Controllers/turns';
import express from "express";

const router = express.Router();

router.get('/turns/round/:id', turnsControllers.getRoundTurns);
router.get('/turns/presentingTeam/:id', turnsControllers.getTurn);
router.post('/turns', turnsControllers.createTurn);
router.put('/turns/presentingTeam', turnsControllers.setPresentingTeam);

export default router;