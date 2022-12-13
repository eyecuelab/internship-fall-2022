import teamsControllers from "../Controllers/teams";
import express from "express";

const router = express.Router();

router.get('/teams/game/:gameId', teamsControllers.getTeamsByGame);
router.get('/team/:id', teamsControllers.getTeamById);
router.post('/team', teamsControllers.createUniqueTeam);
router.put('/team/addPhrase', teamsControllers.addUniquePhrase);
router.put('/team/addPoints', teamsControllers.assignPoints);

export default router; 