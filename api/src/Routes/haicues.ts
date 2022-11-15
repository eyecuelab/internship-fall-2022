import haicuesControllers from "../Controllers/haicues";
import express from "express";

const router = express.Router();

router.get('/haicues', haicuesControllers.getHaicue);
router.post('/haicues', haicuesControllers.createHaicue);

export default router; 