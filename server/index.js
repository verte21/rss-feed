//   RSS reader app
import express from 'express';
import cors from 'cors';
import config from './config.js';

const { parser } = express;
const app = express();

// init db
import './app/db/mongoose.js';

// routers
import feedRouter from './app/routes/api/FeedRouter.js';

// models
import FeedModel from './app/db/models/FeedModel.js';

app.use(cors());
app.use(express.urlencoded({ extended: true }));

// routes

app.use('/api/feeds', feedRouter);

app.get('*', (req, res) => {
  res.json({
    error: '404',
  });
});

app.listen(config.port, (req, res) => {
  console.log('Listening');
});
