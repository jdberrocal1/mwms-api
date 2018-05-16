const express = require('express');
const app = express();
const api = require('./api');
const err = require('./middleware/errorMiddleware');
const config = require('./config/config');
const logger = require('./util/logger');

// setup the app middlware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('/api/v1', api);
// set up global error handling
app.use(err());
// export the app for testing
module.exports = app;