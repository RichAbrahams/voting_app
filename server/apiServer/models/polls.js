/* eslint func-names: 0 */


const mongoose = require('mongoose');
const ShortId = require('shortid');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  createdBy: {
    type: String,
    lowercase: true,
  },
  createdOn: {
    type: Date,
  },
  question: {
    type: String,
  },
  options: Array,
  url: String,
}, {
  collection: 'polls',
});

pollSchema.pre('save', function (next) {
  const poll = this;
  const url = ShortId.generate();
  poll.url = url;
  const dt = Date.now();
  poll.date = dt;
  next();
});

const PollClass = mongoose.model('poll', pollSchema);

module.exports = PollClass;
