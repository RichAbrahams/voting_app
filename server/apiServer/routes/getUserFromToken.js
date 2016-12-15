
module.exports = (req, res) => {
  res.json({ success: true, username: req.user.username });
};
