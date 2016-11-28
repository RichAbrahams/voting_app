/* eslint func-names: 0 */
/* eslint prefer-arrow-callback: 0 */
/* eslint consistent-return: 0 */


const passport = require('passport');
const User = require('../models/user');
const config = require('../../../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.jstring,
};

const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  User.findById(payload.sub, function (err, user) {
    if (err) {
      return done(err, false);
    } // database error
    if (user) { // found user
      done(null, user);
    } else { // didn't find user
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
