import moderatorsControllers from '../Controllers/moderators';
import express from "express";

const router = express.Router();

router.get('/moderator/:email', moderatorsControllers.getModeratorByEmail);
router.post('/moderator', moderatorsControllers.createModerator);

export default router; 