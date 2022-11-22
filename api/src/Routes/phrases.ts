import phrasesControllers from "../Controllers/phrases";
import express from "express";

const router = express.Router();

router.get('/phrases/:topicId', phrasesControllers.getPhrase);
router.post('/phrases', phrasesControllers.createPhrase);

export default router; 