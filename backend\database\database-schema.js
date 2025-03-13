const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: { type: String },
  email: { type: String },
  password: { type: String }
});

const User = mongoose.model('User', userSchema);

module.exports = User;