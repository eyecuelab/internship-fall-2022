import topicsControllers from "../Controllers/topics";
import express from "express";

const router = express.Router();

router.get('/topics', topicsControllers.getTopic);
router.post('/topics', topicsControllers.createTopic);

export default router; 