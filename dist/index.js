"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = _interopRequireDefault(require("./config"));

var _dbconnect = require("./dbconnect");

var _appExpressConfig = _interopRequireDefault(require("./appExpressConfig"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
(0, _appExpressConfig["default"])(app);
app.listen(_config["default"].port, /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var res;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Server started on port ".concat(_config["default"].port));
          _context.next = 3;
          return (0, _dbconnect.dbConnect)();

        case 3:
          res = _context.sent;

          if (res !== true) {
            console.log('Failed to connect to the database:', res.error);
          } else {
            console.log('Database connected');
          }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));