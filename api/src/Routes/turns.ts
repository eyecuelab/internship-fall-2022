import turnsControllers from '../Controllers/turns';
import express from "express";

const router = express.Router();

router.get('/turns/round/:id', turnsControllers.getTurnsByRound);
router.get('/turn/team/:id', turnsControllers.getTurnById);
router.post('/turns', turnsControllers.createTurn);
router.put('/turns/team', turnsControllers.setPresentingTeam);

export default router;