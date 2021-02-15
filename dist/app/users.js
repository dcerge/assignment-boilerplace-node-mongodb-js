"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _index = require("../shemas/index");

var _uuidv = require("uuidv4");

// import { UserModel } from '../shemas/index';
// import { uuid } from 'uuidv4';
// class UsersController {
//   init(props) {
//     const { app, root } = props;
//     // set express app routes here:
//     // example:
//     // app.get(`${root}`, this.listUsers);
//     // ADD YOUR CODE HERE
//   }
//   // ADD YOUR CODE HERE
// }
// export default UsersController;
var UsersController = /*#__PURE__*/function () {
  function UsersController() {
    (0, _classCallCheck2["default"])(this, UsersController);
  }

  (0, _createClass2["default"])(UsersController, [{
    key: "init",
    value: function init(props) {
      var app = props.app,
          root = props.root;
      app.get("".concat(root), this.listUsers);
      app.get("".concat(root, "/:userId"), this.getUser);
      app.post("".concat(root), this.createUser);
      app.put("".concat(root, "/:userId"), this.updateUser);
      app["delete"]("".concat(root, "/:userId"), this.removeUser);
    }
  }, {
    key: "listUsers",
    value: function () {
      var _listUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var users;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _index.UserModel.find({});

              case 2:
                users = _context.sent;
                res.send(users);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function listUsers(_x, _x2) {
        return _listUsers.apply(this, arguments);
      }

      return listUsers;
    }()
  }, {
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res
      /*, next*/
      ) {
        var users;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _index.UserModel.find({
                  username: req.params.userId
                });

              case 3:
                users = _context2.sent;
                res.send(users);
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                res.send({
                  error: _context2.t0
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function getUser(_x3, _x4) {
        return _getUser.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: "createUser",
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res
      /*, next*/
      ) {
        var _req$body, username, password, firstName, lastName, newUser;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$body = req.body, username = _req$body.username, password = _req$body.password, firstName = _req$body.firstName, lastName = _req$body.lastName;
                _context3.prev = 1;
                _context3.next = 4;
                return _index.UserModel.create({
                  id: (0, _uuidv.uuid)(),
                  username: username,
                  passwordHash: password,
                  firstName: firstName,
                  lastName: lastName,
                  createdOn: new Date().toISOString()
                });

              case 4:
                newUser = _context3.sent;
                res.send(newUser);
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);
                res.send({
                  error: _context3.t0
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 8]]);
      }));

      function createUser(_x5, _x6) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res
      /*, next*/
      ) {
        var userId, _req$body2, username, password, firstName, lastName, newUser;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                userId = req.params.userId;
                _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password, firstName = _req$body2.firstName, lastName = _req$body2.lastName;
                _context4.prev = 2;
                _context4.next = 5;
                return _index.UserModel.updateOne({
                  id: userId
                }, {
                  username: username,
                  passwordHash: password,
                  firstName: firstName,
                  lastName: lastName,
                  updatedOn: new Date().toISOString()
                });

              case 5:
                newUser = _context4.sent;
                res.send(newUser);
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](2);
                res.send({
                  error: _context4.t0
                });

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 9]]);
      }));

      function updateUser(_x7, _x8) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }()
  }, {
    key: "removeUser",
    value: function () {
      var _removeUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res
      /*, next*/
      ) {
        var userId, newUser;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                userId = req.params.userId;
                _context5.prev = 1;
                _context5.next = 4;
                return _index.UserModel.updateOne({
                  id: userId
                }, {
                  removedOn: new Date().toISOString()
                });

              case 4:
                newUser = _context5.sent;
                res.send(newUser);
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);
                res.send({
                  error: _context5.t0
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 8]]);
      }));

      function removeUser(_x9, _x10) {
        return _removeUser.apply(this, arguments);
      }

      return removeUser;
    }()
  }, {
    key: "signin",
    value: function () {
      var _signin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res
      /*, next */
      ) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function signin(_x11, _x12) {
        return _signin.apply(this, arguments);
      }

      return signin;
    }()
  }]);
  return UsersController;
}();

var _default = UsersController;
exports["default"] = _default;