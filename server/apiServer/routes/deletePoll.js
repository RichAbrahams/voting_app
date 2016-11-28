const Poll = require('../models/polls');

module.exports = (req, res, next) => {
  Poll.findOneAndRemove({ createdBy: req.user.username, _id: req.body.id })
      .then((data) => res.json({ success: true, data }))
      .catch((err) => next(err)); };
