import UsersController from './app/users';

const usersController = new UsersController();

const configureApp = (app) => {
  app.get('/', (req, res) => {
    res.send({});
  });

  // Set entrypoint API handlers
  usersController.init({ app, root: '/users' });
};

export default configureApp;
