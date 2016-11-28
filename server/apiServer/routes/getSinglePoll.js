const Poll = require('../models/polls');

module.exports = (req, res, next) => {
  Poll.findOne({ url: req.body.url })
      .then((data) => res.json({ success: true, poll: data }))
      .catch((err) => next(err)); };
