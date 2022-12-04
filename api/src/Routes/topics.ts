import topicsControllers from "../Controllers/topics";
import express from "express";

const router = express.Router();

router.get('/topic/:topicId', topicsControllers.getTopic);
router.get('/topics/game/:gameId', topicsControllers.getTopics);
router.get('/topics/round/:roundId', topicsControllers.getTopicByRound);
router.post('/topics', topicsControllers.createTopic);
router.put('/topics', topicsControllers.assignTopicToRound)
router.delete('/topics/:id', topicsControllers.deleteTopic);

export default router; 