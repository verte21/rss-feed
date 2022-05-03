import express from 'express';
const router = new express.Router();
import feedController from '../../controllers/feedsController.js';

router.get('/', feedController.listFeeds);

router.get('/show', feedController.showFeed);

router.post('/add', feedController.addFeed);

router.put('/update', feedController.updateFeed);

router.delete('/delete', feedController.deleteFeed);

router.post('/parseFeed', feedController.parseFeed);

export default router;
