/* eslint consistent-return: 0 */
/* eslint arrow-body-style: 0 */
/* eslint func-names: 0 */
/* eslint no-shadow: 0 */
/* eslint prefer-arrow-callback: 0 */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

mongoose.Promise = Promise;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: String,
});

userSchema.pre('save', function (next) {
  const user = this;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
