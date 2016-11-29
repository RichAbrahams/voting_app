const Poll = require('../models/polls');

module.exports = (req, res, next) => {
  const polls = Poll.find({}).sort('date').limit(req.body.limit).skip(req.body.skip);
  const count = Poll.count({});
  Promise.all([polls, count])
    .then((values) => { res.json({ success: true, polls: values[0], count: values[1] }); })
    .catch((err) => next(err));
};
