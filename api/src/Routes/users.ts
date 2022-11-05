import usersControllers from '../Controllers/users';
import express from "express";

const router = express.Router();

router.get('/users', usersControllers.getUsers);
router.post('/users', usersControllers.createUser);

export default router; 