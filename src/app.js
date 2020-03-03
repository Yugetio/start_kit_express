const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./src/swagger.yaml');

// const compression = require('compression'); //for prod
// const helmet = require('helmet');

const cors = require('cors');
const logger = require('morgan')('dev');

const middleware = require('./middleware');

const someRouters = require('./routers/someRouter');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
  app.use(logger);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/api/some', someRouters);

// If that above routes didn't work, we get 404 and forward to error handler
app.use(middleware.routeNotFound);

app.use(middleware.dbValidationErrors);

if (process.env.NODE_ENV === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(middleware.developmentErrors);
}

// production error handler
app.use(middleware.productionErrors);

module.exports = app;