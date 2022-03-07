import mongoose from 'mongoose';
const { Schema } = mongoose;

const feedSchema = new Schema({
  link: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Feed', feedSchema);
