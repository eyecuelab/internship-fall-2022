import topicsControllers from "../Controllers/topics";
import express from "express";

const router = express.Router();

router.get('/topic/:topicId', topicsControllers.getTopicById);
router.get('/topics/game/:gameId', topicsControllers.getTopicsByGame);
router.get('/topic/round/:roundId', topicsControllers.getTopicByRound);
router.post('/topic', topicsControllers.createTopic);
router.put('/topic', topicsControllers.assignTopicToRound)
router.delete('/topic/:id', topicsControllers.deleteTopic);

export default router; 