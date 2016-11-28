const tokenForUser = require('./generateToken');

function signin(req, res) {
  res.json({ success: true, userName: req.user.username, token: tokenForUser(req.user) });
}

module.exports = signin;
