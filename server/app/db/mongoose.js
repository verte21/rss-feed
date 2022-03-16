import mongoose from 'mongoose';
import config from '../../config.js';

mongoose
  .connect(config.db)
  .then(() => {
    console.log('Connected to db');
  })
  .catch((error) => {
    console.log('Db connection failed.');
    console.log(error);
  });
