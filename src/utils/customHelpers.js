exports.makeRandomId = () =>
  Math.random()
    .toString(36)
    .substring(2, 10);
