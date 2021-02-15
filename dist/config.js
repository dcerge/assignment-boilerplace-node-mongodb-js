"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireWildcard(require("path"));

var _lodash = require("lodash");

var _dotenvSafe = require("dotenv-safe");

// Take environment variabls from .env files and make sure it has all the vars mentioned in .env.example
(0, _dotenvSafe.config)({
  path: (0, _path.resolve)(__dirname, '../.env'),
  allowEmptyValues: true,
  example: _path["default"].join(__dirname, '../.env.example')
}); // Add default NODE_ENV = 'development'

var envVars = Object.assign({
  NODE_ENV: 'development'
}, process.env); // apply camelCase to all environment vars: DB_USER => dbUser

var appSettings = Object.keys(envVars).reduce(function (vars, varKey) {
  vars[(0, _lodash.camelCase)(varKey)] = envVars[varKey];
  return vars;
}, {});
var _default = appSettings;
exports["default"] = _default;