import express from 'express';
const router = new express.Router();
import feedController from '../../controllers/feedsController.js';

router.get('/', feedController.listFeeds);

router.get('/show', feedController.showFeed);

router.post('/add', feedController.addFeed);

router.patch('/update', feedController.updateFeed);

router.delete('/delete', feedController.deleteFeed);

export default router;
