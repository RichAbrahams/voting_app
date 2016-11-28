const Poll = require('../models/polls');

module.exports = (req, res, next) => {
  const poll = new Poll({
    createdBy: req.user.username,
    question: req.body.question,
    options: req.body.options,
  });
  const promise = poll.save();
  promise.then((data) => {
    res.json({ success: true, data });
  }).catch((err) => next(err));
};
