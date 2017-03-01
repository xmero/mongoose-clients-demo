const mongoose = require('mongoose');
const collection = 'clients'

const TaskSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: String,
  age: Number,
  updatedAt: Number,
  createdAt: { type: String, default: Date.now }
}, { collection })

module.exports = mongoose.model('Client', TaskSchema);