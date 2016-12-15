const Poll = require('../models/polls');

module.exports = (req, res, next) => {
  Poll.find({ createdBy: req.user.username })
      .sort({ _id: -1 })
      .then((data) => res.json({ success: true, polls: data }))
      .catch((err) => next(err));
};
