import teamsControllers from "../Controllers/teams";
import express from "express";

const router = express.Router();

router.get('/teams/game/:gameId', teamsControllers.getTeams);
router.get('/team/:id', teamsControllers.getOneTeam);
router.post('/teams', teamsControllers.createUniqueTeam);
router.put('/team/addPhrase', teamsControllers.addPhrase);
router.put('/team/addPoints', teamsControllers.addPoints)

export default router; 