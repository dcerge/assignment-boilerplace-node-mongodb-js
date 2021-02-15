import path, { resolve } from 'path';
import { camelCase } from 'lodash';
import { config } from 'dotenv-safe';

// Take environment variabls from .env files and make sure it has all the vars mentioned in .env.example
config({
  path: resolve(__dirname, '../.env'),
  allowEmptyValues: true,
  example: path.join(__dirname, '../.env.example'),
});

// Add default NODE_ENV = 'development'
const envVars = Object.assign({ NODE_ENV: 'development' }, process.env);

// apply camelCase to all environment vars: DB_USER => dbUser
const appSettings = Object.keys(envVars).reduce((vars, varKey) => {
  vars[camelCase(varKey)] = envVars[varKey];
  return vars;
}, {});

export default appSettings;
