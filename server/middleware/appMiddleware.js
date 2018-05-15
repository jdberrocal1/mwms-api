var morgan = require('morgan');
var bodyParser = require('body-parser');
const methodOverride = require('method-override')
const helmet = require('helmet')

module.exports = function (app) {
  app.use(helmet());
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended:true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
};
