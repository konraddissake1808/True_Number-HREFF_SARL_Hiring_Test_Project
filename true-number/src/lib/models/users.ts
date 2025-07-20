import mongoose, { Schema, models, model } from 'mongoose';

const CounterSchema = new Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

const UserSchema = new Schema({
  id: Number,
  username: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
});

UserSchema.pre('save', async function (next) {
  if (this.isNew) {
    const counter = await mongoose
      .model('Counter', CounterSchema)
      .findByIdAndUpdate({ _id: 'userId' }, { $inc: { seq: 1 } }, { upsert: true, new: true });
    this.id = counter.seq;
  }
  next();
});

const User = models.User || model('User', UserSchema);
export default User;