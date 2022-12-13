import phrasesControllers from "../Controllers/phrases";
import express from "express";

const router = express.Router();

router.get('/phrases/:topicId', phrasesControllers.getPhrasesByTopic);
router.get('/phrase/unique/:topicId', phrasesControllers.getUniquePhrase);
router.post('/phrase', phrasesControllers.createPhrase);
router.delete('/phrase/:id', phrasesControllers.deletePhrase);

export default router; 