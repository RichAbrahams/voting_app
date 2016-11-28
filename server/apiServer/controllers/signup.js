/* eslint consistent-return: 0 */
/* eslint arrow-body-style: 0 */

const User = require('../models/user');
const tokenForUser = require('./generateToken');
const validator = require('validator');

function signup(req, res) {
  if (!req.body.username || req.body.username.length === 0) {
    return res.status(422).json({
      success: false,
      error: {
        username: 'username is required',
      },
    }).end();
  }

  if (!req.body.email || req.body.email.length === 0) {
    return res.status(422).json({
      success: false,
      error: {
        email: 'email is required',
      },
    }).end();
  }

  if (!req.body.password || req.body.email.password === 0) {
    return res.status(422).json({
      success: false,
      error: {
        password: 'password is required',
      },
    }).end();
  }

  const username = validator.escape(req.body.username).toLowerCase();
  const email = validator.escape(req.body.email).toLowerCase();
  const password = validator.escape(req.body.password).toLowerCase();

  if (!validator.isEmail(email)) {
    return res.status(422).json({
      success: false,
      error: {
        email: 'invalid email',
      },
    }).end();
  }

  const checkUsername = new Promise((resolve, reject) => {
    User.findOne({
      username,
    }, (err, existingUser) => {
      if (err) {
        reject(err);
      }
      if (existingUser) {
        resolve(true);
      }
      resolve(false);
    });
  });

  const checkEmail = new Promise((resolve, reject) => {
    User.findOne({
      email,
    }, (err, existingUser) => {
      if (err) {
        reject(err);
      }
      if (existingUser) {
        resolve(true);
      }
      resolve(false);
    });
  });

  Promise.all([checkUsername, checkEmail])
    .then((values) => {
      if (values[0]) {
        return res.status(422).json({
          success: false,
          error: {
            username: 'username is already in use',
          },
        }).end();
      }
      if (values[1]) {
        return res.status(422).json({
          success: false,
          error: {
            email: 'email is already in use',
          },
        }).end();
      }
      const user = new User({
        username,
        email,
        password,
      });

      user.save()
        .then((data) => {
          return res.json({
            success: true,
            username,
            token: tokenForUser(data),
          }).end();
        })
        .catch(() => {
          return res.status(500).json({
            success: false,
            error: {
              _error: 'server error, please try later',
            },
          }).end();
        });
    })
    .catch(() => {
      return res.status(500).json({
        success: false,
        error: {
          _error: 'server error, please try later',
        },
      }).end();
    });
}

module.exports = signup;
