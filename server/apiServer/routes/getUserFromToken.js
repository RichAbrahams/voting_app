
module.exports = (req, res) => {
  res.json({ success: true, userName: req.user.username });
};
