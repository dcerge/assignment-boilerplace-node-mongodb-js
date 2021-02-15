"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _users = _interopRequireDefault(require("./app/users"));

var usersController = new _users["default"]();

var configureApp = function configureApp(app) {
  app.get('/', function (req, res) {
    res.send({});
  }); // Set entrypoint API handlers

  usersController.init({
    app: app,
    root: '/users'
  });
};

var _default = configureApp;
exports["default"] = _default;