import mongoose, { Schema, models, model } from 'mongoose';

const UserSchema = new Schema({
  id: Number,
  username: String,
  email: String,
  password: String,
  phone: Number,
});

// Avoid redefining the model on hot reloads
const User = models.User || model('User', UserSchema);
export default User;