import userSchema from '../db/models/UserModel.js';

class UserController {
  async registerUser(req, res) {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;

    const user = new userSchema({
      userName: userName,
      email: email,
    });
    user.setPass(password);
    await user.save();
  }

  async logIn(req, res) {
    const userName = req.body.userName;
    const password = req.body.password;
    console.log('login');
    res.sendStatus(403);
  }

  async logOut(req, res) {
    res.sendStatus(403);
  }

  async deleteUser(req, res) {
    res.sendStatus(403);
  }

  async updateUser(req, res) {
    res.sendStatus(403);
  }
}

export default new UserController();
