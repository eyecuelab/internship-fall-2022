import phrasesControllers from "../Controllers/phrases";
import express from "express";

const router = express.Router();

router.get('/phrases/:topicId', phrasesControllers.getPhrase);
router.post('/phrases', phrasesControllers.createPhrase);
router.delete('/phrases/:id', phrasesControllers.deletePhrase);

export default router; 