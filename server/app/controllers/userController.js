import userSchema from '../db/models/UserModel.js';
import jwt from 'jsonwebtoken';
import config from '../../config.js';

class UserController {
  async registerUser(req, res) {
    const { userName, email, password } = req.body;

    try {
      const user = new userSchema({
        userName: userName,
        email: email,
      });
      user.setPass(password);
      await user.save();
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(409);
    }
  }

  async logIn(req, res) {
    try {
      const { userName, password } = req.body;

      if (!userName || !password) {
        res.status(401).send('Username and password are required!');
      }

      const user = await userSchema.findOne({ userName });

      if (user && user.validPass(password)) {
        const payload = { userName: user.userName, userId: user._id };

        const token = await jwt.sign(payload, config.access_token, {
          expiresIn: '2h',
        });

        user.token = token;
        user.save();
        res.status(200).json(token);
      } else {
        res.status(400);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async logOut(req, res) {
    res.sendStatus(403);
  }

  async deleteUser(req, res) {
    const { _id, userName, email } = req.body;

    try {
      const user = await userSchema.deleteOne({ _id: _id });
      res.sendStatus(200); //send(`User deleted`);
    } catch (err) {
      res.sendStatus(500); //.send(err.message);
    }
  }

  async updateUser(req, res) {
    const { _id, newUserName, newPassword, newEmail } = req.body;
    const query = { _id: _id };
    let user;

    if (newUserName) {
      userSchema.findOneAndUpdate(
        query,
        { userName: newUserName },
        { runValidators: true },
        (err, doc) => {
          if (err) res.status(500).send({ error: err });
          // res.send('Username changed successfully');
        }
      );
    }

    if (newPassword) {
      try {
        user = await userSchema.findOne(query);

        user.setPass(newPassword);
        await user.save();
      } catch (err) {
        res.status(500).send({ error: err });
      }
    }

    if (newEmail) {
      userSchema.findOneAndUpdate(query, { email: newEmail }, (err, doc) => {
        if (err) res.status(500).send({ error: err });
        // res.send('Email changed successfully');
      });
    }
  }
}

export default new UserController();
