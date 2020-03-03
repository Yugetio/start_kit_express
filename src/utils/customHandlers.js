const HttpError = require('http-errors');
const fs = require('fs');
const path = require('path');
const { pathRootDir } = require('../middleware/multer');
/*
  This is a file of data and helper functions
*/

/**
 * Helper for checking if doc with id is exist in model
 * @param  { { field:string, value:string } } conditions Document Id
 * @param {'MongooseModel'} Model Name of Mongoose model
 * @param { { entity:string, status:number, customMessage:string } } options Settings object. Like custom error message, status, etc.
 * @returns {'Object or Error'} Return Promise generally. But result is an Object or Error
 */
const findIfExist = async (conditions, Model) => {
  // default conditions
  const { field = '_id', value, id } = conditions;
  // Find in Model
  const foundData = await Model.findOne({ [field]: value || id });

  return !!foundData;
};

exports.checkIfExist = async (conditions, Model, options = {}) => {
  // default options
  const { entity = `Data`, status = 409, customMessage } = options;

  const ifExist = await findIfExist(conditions, Model);

  if (ifExist) {
    throw new HttpError[status](customMessage || `${entity} already exist!`);
  }
};

exports.deleteFile = (fileName, callback = () => {}) => {
  fs.unlink(path.join(pathRootDir, fileName), callback);
};
