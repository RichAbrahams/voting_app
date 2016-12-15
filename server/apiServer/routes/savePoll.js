const Poll = require('../models/polls');

module.exports = (req, res, next) => {
  const optionsArr = [];
  req.body.options.forEach((item) => {
    const option = { opt: item.option, votes: 0 };
    optionsArr.push(option);
  });
  const poll = new Poll({
    createdBy: req.user.username,
    date: Date.now(),
    question: req.body.question,
    options: optionsArr,
  });
  poll.save().then((data) => res.json({ success: true, data }))
  .catch((err) => next(err));
};
