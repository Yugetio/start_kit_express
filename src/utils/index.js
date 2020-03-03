const customHandlers = require('./customHandlers');
const customHelpers = require('./customHelpers');

module.exports = {
  ...customHandlers,
  ...customHelpers,
};
