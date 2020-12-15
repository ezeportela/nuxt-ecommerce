const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: 'Name is required',
  },
  description: {
    type: String,
    required: 'Description is required',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

schema.pre('findOneAndUpdate', async (next) => {
  const { _update } = this;
  _update.updatedAt = Date.now();
  next();
});

module.exports = model('Product', schema);
