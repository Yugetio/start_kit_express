const mongoose = require('mongoose');

const SomeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    default: '',
  },
});

module.exports = mongoose.model('Some', SomeSchema);
