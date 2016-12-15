const tokenForUser = require('./generateToken');

function signin(req, res) {
  res.json({ success: true, username: req.user.username, token: tokenForUser(req.user) });
}

module.exports = signin;
