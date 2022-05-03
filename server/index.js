//   RSS reader app
import express from 'express';
import cors from 'cors';
import config from './config.js';

const { parser } = express;
const app = express();
import { verifyToken } from './app/middlewares/user-middleware.js';

// init db
import './app/db/mongoose.js';

// routers
import feedRouter from './app/routes/api/FeedRouter.js';
import userRouter from './app/routes/api/UserRouter.js';
import todoRouter from './app/routes/api/TodoRouter.js';

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/api/feeds', feedRouter);
app.use('/api/user', userRouter);
app.use('/api/todo', todoRouter);

app.get('*', (req, res) => {
  res.json({
    error: '404',
  });
});

app.listen(config.port, (req, res) => {
  console.log('Listening on ' + config.port);
});
