import topicsControllers from "../Controllers/topics";
import express from "express";

const router = express.Router();

router.get('/topic/:topicId', topicsControllers.getTopic);
router.get('/topics/:gameId', topicsControllers.getTopics);
router.post('/topics', topicsControllers.createTopic);
router.delete('/topics/:id', topicsControllers.deleteTopic);

export default router; 