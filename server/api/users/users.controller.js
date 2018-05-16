const User = require('./user.model');
const uuidv1 = require('uuid/v1');

module.exports = {
  // params(req, res, next, id) {
  //   User.findById(id)
  //     .then(function(user) {
  //       if (!user) {
  //         next(new Error('No user with that id'));
  //       } else {
  //         req.user = user;
  //         next();
  //       }
  //     }, function(err) {
  //       next(err);
  //     });
  //   }
  // }

  get(req, res, next) {
    return User
      .findAll()
      .then(user => res.status(200).send(user))
      .catch(user => res.status(400).send(user));
  },

// getOne(req, res, next) {
//   var user = req.user;
//   res.json(user);
// };

// put(req, res, next) {
//   var user = req.user;

//   var update = req.body;

//   _.merge(user, update);

//   user.save(function(err, saved) {
//     if (err) {
//       next(err);
//     } else {
//       res.json(saved);
//     }
//   })
// };

  post(req, res, next) {
    const newUser = req.body;

    //validate user info
    newUser.id = uuidv1();
    User
      .create(newUser)
      .then(user => res.status(201).send(user))
      .catch(err => next(err));
  },

// delete(req, res, next) {
//   req.user.remove(function(err, removed) {
//     if (err) {
//       next(err);
//     } else {
//       res.json(removed);
//     }
//   });
// };
};
