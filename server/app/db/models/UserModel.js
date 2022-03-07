import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import cryptoJs from 'crypto-js';
import jwt from 'jwt';
const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: {
    type: String,
    lowercase: true,
    minLength: 6,
    required: [true, "can't be empty"],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    unique: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    minLength: 10,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    unique: true,
    index: true,
  },
  password: {
    type: String,
    minLength: 7,
    required: true,
  },
  hash: String,
  salt: String,
  timestamps: true,
  feeds: [{ type: Schema.Types.ObjectId, ref: 'feed' }],
});
// https://mongoosejs.com/docs/populate.html

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.methods.setPass = function (password) {
  this.salt = cryptoJs.lib.WordArray.random(128 / 8);
  this.password = cryptoJs.PBKDF2(password, this.salt, {
    keySize: 128 / 32,
    iterations: 1000,
  });
};

UserSchema.methods.validPass = function (password) {
  const hash = cryptoJs.PBKDF2(password, this.salt, {
    keySize: 128 / 32,
    iterations: 1000,
  });
  return this.hash === hash;
};

export default mongoose.model('User', UserSchema);
