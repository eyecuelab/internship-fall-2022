import express from "express";
import logicControllers from "../Controllers/logic";

const router = express.Router();

router.post('/startGame', logicControllers.startGame);
router.post('/startTime', logicControllers.startTime);
router.post('/addTime', logicControllers.addRoundTime);
// router.post('/buzzerRefresh', logicControllers.buzzerRefresh);

export default router;