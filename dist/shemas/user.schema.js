"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = exports.UserSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _collections = _interopRequireDefault(require("./collections"));

var Schema = _mongoose["default"].Schema;
var UserSchema = new Schema({
  id: String,
  username: String // ADD YOUR CODE HERE

}); // Compile model from schema

exports.UserSchema = UserSchema;

var UserModel = _mongoose["default"].model(_collections["default"].user, UserSchema);

exports.UserModel = UserModel;