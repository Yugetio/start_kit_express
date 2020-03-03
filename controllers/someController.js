const HttpError = require('http-errors');

const Some = require('../models/Some');

const create = async (req, res) => {
  const data = new Some({
    title: req.body.title,
  });
  await data.save();

  res.status(201).json(data);
};

const get = async (req, res) => {
  const data = await Some.find();
  res.json(data);
};

const update = async (req, res) => {
  const data = await Some.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!data) throw HttpError[404]("Some don't found!");

  res.json(data);
};

const remove = async (req, res) => {
  const data = await Some.findByIdAndDelete(req.params.id);
  if (!data) throw HttpError[404]("Some don't found!");

  res.json({ message: 'Success!' });
};

module.exports = {
  get,
  create,
  update,
  remove,
};
