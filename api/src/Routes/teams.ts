import teamsControllers from "../Controllers/teams";
import express from "express";

const router = express.Router();

router.get('/teams', teamsControllers.getTeam);
router.post('/teams', teamsControllers.createTeam);

export default router; 