import haicuesControllers from "../Controllers/haicues";
import express from "express";

const router = express.Router();

router.get('/haicues', haicuesControllers.getHaicues);
router.get('/haicues/round/:id', haicuesControllers.getHaicuesByRound);
router.get('/haicue/round/:roundId/team/:teamId', haicuesControllers.getHaicueByTeamRound);
router.post('/haicue', haicuesControllers.createHaicue);
router.put('/haicue', haicuesControllers.resubmitHaicue);

export default router; 