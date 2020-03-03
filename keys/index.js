const path = require('path');

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://yugetio:JfvyBNHzjn6BXMUi@cluster0-3nivy.mongodb.net/test',
  SECRET: process.env.SECRET || 'secretphrase',
  REFRESH_TOKET_SECRET: process.env.REFRESH_TOKET_SECRET || 'onesecretphrase',
  TOKEN_LIFE: process.env.TOKEN_LIFE || 900, // 15m
  REFRESH_TOKEN_LIFE: process.env.REFRESH_TOKEN_LIFE || 86400, //24h
  PUBLIC_FOLDER_PATH: path.join(__dirname, '..', process.env.PUBLIC_FOLDER_PATH || 'public'), // .../projectFolder/public
}