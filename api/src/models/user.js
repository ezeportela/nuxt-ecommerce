const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SALT_COUNT = 16;
const { Schema, model } = mongoose;

const schema = new Schema({
  email: {
    type: String,
    required: 'Email is required',
    unique: true,
  },
  password: {
    type: String,
    required: 'Password is required',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

schema.pre('save', async (next) => {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, SALT_COUNT);
    console.log(`Password was updated via pre save event`);
  }
  next();
});

schema.pre('findOneAndUpdate', async (next) => {
  const { model: _model, getQuery, _update } = this;
  const docToUpdate = await _model.findOne(getQuery());

  if (docToUpdate.password !== _update.password) {
    const newPassword = await bcrypt.hash(_update.password, SALT_COUNT);
    _update.password = newPassword;
  }
  next();
});

schema.methods.generateAuthToken = async () => {
  // Generate an auth token for the user
  const { _id } = this;
  const token = jwt.sign({ _id }, process.env.APP_SECRET_KEY);
  return token;
};

module.exports = model('User', schema);
