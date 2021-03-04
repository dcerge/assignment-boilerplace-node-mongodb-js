import mongoose from 'mongoose';
import collections from './collections';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: String,
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  badPassword: String,
  // ADD YOUR CODE HERE
});

// Compile model from schema
const UserModel = mongoose.model(collections.user, UserSchema);

export { UserSchema, UserModel };
