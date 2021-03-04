import { UserModel } from '../shemas/index';
import { uuid } from 'uuidv4';

class UsersController {
  init(props) {
    const { app, root } = props;

    // set express app routes here:
    app.get(`${root}`, (req, res) => this.listUsers(req, res));
    app.get(`${root}:id`, (req, res) => this.getUserById(req, res));
    app.post(`${root}`, (req, res) => this.addUser(req, res));
    app.post(`${root}/login/`, (req, res) => this.authenticateUser(req, res));
    app.get(`${root}/delete:username`, (req, res) => this.deleteUser(req, res));
    app.get(`${root}/deleteAllUsers`, (req, res) => this.dropUsers(req, res));
  }

  // returns a list of all users and related info
  listUsers(req, res) {
    try {
      UserModel.find({}, { badPassword: 0 }, function (err, users) {
        res.send('A list of users ' + users);
      });
    } catch (error) {
      res.send(error);
    }
  }

  // returns a username
  async getUserById(req, res) {
    await UserModel.find({ id: req.params.id.substring(1) }, { badPassword: 0 }, function(err, userName) {
      if (err) {
        res.send(err);
        return;
      }
      if (userName == 0) {
        res.send('no record found');
      } else {
        res.send(userName);
      }
    });
  }

  // delete user by unique username
  async deleteUser(req, res) {
    const uName = req.params.username.substring(1);
    await UserModel.findOneAndDelete({ username: uName }, function (err, userData) {
      if (err) {
        res.send(err);
        return;
      }
      if (userData == null) {
        res.send('user: ' + uName + ' not found.');
      } else {
        res.send('user: ' + uName + ' deleted.');
      }
    });
  }

  // adds a new user
  // this method requires some checks to be added, such as unique id/ username
  // and that correct information is filled out
  async addUser(req, res) {
    var userInfo = req.body;
    var newUser = new UserModel({
      id: userInfo.id,
      username: userInfo.username,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      badPassword: userInfo.badPassword,
    });
    await newUser.save();
    res.send('posted');
  }

  /* 
  send true if username and password match
  (yes this is a very insecure way of going about this)
  There is currently an issue with this method... 
  not sure what, will come back to it later.
  */
  async authenticateUser(req, res) {
    const loginInfo = req.body;
    console.log(loginInfo);
    const inputUserName = loginInfo.username;
    const inputPass = loginInfo.badPassword;
    console.log(inputUserName);
    console.log(inputPass);
    await UserModel.find({ username: inputUserName }, function (err, userData) {
      if (err) {
        res.send(err);
        return;
      }
      console.log(userData.badPassword);
      if (userData == null) {
        res.send(false);
        // change to badPassword
        // == or === ?
      } else if (userData.badPassword === inputPass) {
        res.send(true);
      } else {
        res.send(false);
      }
    });
  }

  // Drop entire users collection.
  async dropUsers(req, res) {
    UserModel.db('users').dropDatabase();
    res.send('deleted users collection');
  }

  // add a put method for updating user info
}

export default UsersController;
