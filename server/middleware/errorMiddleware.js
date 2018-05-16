const messages = require('../util/errorMessages');

module.exports = () => {
  return (err, req, res, next) => {
    if (err.name === 'ValidationError') {
      var errors = [];

      Object.keys(err.errors).forEach((field) => {
        const eObj = err.errors[field];

        //If we don't have a message for `type`, just push the error through
        if (!messages.hasOwnProperty(eObj.kind)) {
          errors.push(eObj.kind);
        }
        //Otherwise, use util.format to format the message, and passing the path
        else {
          errors.push({ status: 400, message: eObj.path + messages[eObj.kind].message, code: messages[eObj.kind].code });
        }
      });
      return res.status(400).send(
        {
          errors: errors
        }
      );

    } else if (err.name === 'CastError') {
      return res.status(401).send(
        {
          errors: [{ status: 401, message: messages.castError.message, code: messages.castError.code }]
        }
      );

    } else if (err.name === 'UnauthorizedError') {
      return res.status(401).send(
        {
          errors: [{ status: 401, message: messages.invalidToken.message, code: messages.invalidToken.code }]
        }
      );

    } else if (err.name === 'MongoError') {
      return res.status(409).send(
        {
          errors: [{ status: 409, message: err.errmsg, code: messages.mongoError.code }]
        }
      );

    } else if (err) {
      return res.status(500).send(
        {
          errors: [{ status: 500, message: err, code: '0' }]
        }
      );
    }

    //console.error(err.stack);
    return res.status(500).send(
      {
        errors: { status: 500, message: messages.fatalError.message, code: messages.fatalError.code }
      }
    );
  };
};