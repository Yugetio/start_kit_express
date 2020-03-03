const mongoose = require('mongoose');
// const toJson = require('@meanie/mongoose-to-json');
const { MONGODB_URI } = require('../keys');

// // This plugin will normalize JSON output for client side applications
// mongoose.plugin(toJson);
mongoose.Promise = global.Promise;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

mongoose
  .connect(MONGODB_URI, options)
  .catch(e => console.error(`Error with db connection. 🚫 ➞ ${e.message}`));

module.exports = mongoose.connection;
