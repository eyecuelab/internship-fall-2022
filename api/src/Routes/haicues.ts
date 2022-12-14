import haicuesControllers from "../Controllers/haicues";
import express from "express";

const router = express.Router();

router.get('/haicues', haicuesControllers.getHaicue);
router.get('/haicues/round/:id', haicuesControllers.getHaicuesByRound);
router.get('/haicues/round/:roundId/team/:teamId', haicuesControllers.getHaicueByTeamRound);
router.post('/addHaicue', haicuesControllers.createHaicue);
router.put('/haicues', haicuesControllers.resubmitHaicue);

export default router; 