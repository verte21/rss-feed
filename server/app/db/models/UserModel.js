import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import cryptoJs from 'crypto-js';
// import jwt from 'jwt';
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      lowercase: true,
      minLength: 5,
      required: [true, "can't be empty"],
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      minLength: 5,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      unique: true,
      index: true,
    },
    password: String,
    salt: String,
    feeds: [{ type: Schema.Types.ObjectId, ref: 'feed' }],
  },
  { timestamps: true }
);
// https://mongoosejs.com/docs/populate.html

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.methods.setPass = async function (password) {
  this.salt = cryptoJs.lib.WordArray.random(128 / 8);
  this.password = await cryptoJs
    .PBKDF2(password, this.salt, {
      keySize: 128 / 32,
      iterations: 1000,
    })
    .toString();
};

UserSchema.methods.validPass = function (password) {
  const hash = cryptoJs.PBKDF2(password, this.salt, {
    keySize: 128 / 32,
    iterations: 1000,
  });
  return this.hash === hash;
};

export default mongoose.model('User', UserSchema);
