import express from 'express';
const router = new express.Router();
import userController from '../../controllers/userController.js';

router.post('/login', userController.logIn);

router.get('/logout', userController.logOut);

router.post('/register', userController.registerUser);

router.delete('/delete', userController.deleteUser);

router.patch('/edit', userController.updateUser);

export default router;
