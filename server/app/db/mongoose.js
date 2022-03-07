import mongoose from 'mongoose';
import config from '../../config.js';

mongoose.connect(config.db).catch((error) => console.error(error));
