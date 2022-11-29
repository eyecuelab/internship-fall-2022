import moderatorsControllers from '../Controllers/moderators';
import express from "express";

const router = express.Router();

router.get('/moderators/:email', moderatorsControllers.getModerators);
router.post('/moderators', moderatorsControllers.createModerator);

export default router; 