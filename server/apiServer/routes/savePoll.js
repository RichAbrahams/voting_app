const Poll = require('../models/polls');

module.exports = (req, res, next) => {
  const optionsArr = [];
  req.body.pollOptions.forEach((item) => {
    const option = { opt: item, votes: 0 };
    optionsArr.push(option);
  });
  const poll = new Poll({
    createdBy: req.user.username,
    date: Date.now(),
    question: req.body.pollQuestion,
    options: optionsArr,
  });
  poll.save().then((data) => res.json({ success: true, data }))
  .catch((err) => next(err));
};
