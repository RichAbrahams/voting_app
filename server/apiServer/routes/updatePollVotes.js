

const Poll = require('../models/polls');

module.exports = (req, res, next) => {
  const id = req.body._id; // eslint-disable-line 
  const opt = req.body.opt;
  Poll.update({ _id: id, 'options.opt': opt }, { $inc: { 'options.$.votes': 1 } })
      .then((data) => res.json({ success: true, data }))
      .catch((err) => next(err));
};
