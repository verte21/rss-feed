import express from 'express';
const router = new express.Router();
import TodoController from '../../controllers/todoController.js';

router.get('/', TodoController.listTodo);

router.post('/add', TodoController.addTodo);

router.put('/update', TodoController.updateTodo);

router.delete('/delete', TodoController.deleteTodo);

export default router;
