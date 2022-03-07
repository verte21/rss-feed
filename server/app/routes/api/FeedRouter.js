import express from 'express';
const router = new express.Router();
import feedControler from '../../controllers/feedsControler.js';

router.get('/', feedControler.listFeeds);

router.get('/show', feedControler.showFeed);

router.post('/add', feedControler.addFeed);

router.patch('/update', feedControler.updateFeed);

router.delete('/delete', feedControler.deleteFeed);

export default router;
