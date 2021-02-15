"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "collections", {
  enumerable: true,
  get: function get() {
    return _collections["default"];
  }
});
Object.defineProperty(exports, "UserSchema", {
  enumerable: true,
  get: function get() {
    return _user.UserSchema;
  }
});
Object.defineProperty(exports, "UserModel", {
  enumerable: true,
  get: function get() {
    return _user.UserModel;
  }
});

var _collections = _interopRequireDefault(require("./collections"));

var _user = require("./user.schema");