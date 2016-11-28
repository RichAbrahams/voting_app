/* eslint new-cap:0 */
/* eslint no-shadow:0 */
/* eslint no-unused-vars:0 */

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const signup = require('./controllers/signup');
const signin = require('./controllers/signin');
const passport = require('passport');
const passportJwt = require('./services/passportJwt');
const passportLocal = require('./services/passportLocal');
const helmet = require('helmet');
const mongoose = require('mongoose');
const getUserFromToken = require('./routes/getUserFromToken');
const getPolls = require('./routes/getPolls');
const getSinglePoll = require('./routes/getSinglePoll');
const updatePollVotes = require('./routes/updatePollVotes');
const getUserPolls = require('./routes/getUserPolls');
const deletePoll = require('./routes/deletePoll');
const savePoll = require('./routes/savePoll');

mongoose.connect('mongodb://pollingapp:pollingapp@ds153677.mlab.com:53677/pollingapp');

const requireAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => { // eslint-disable-line
    if (err) { return next(err); }
    if (!user) { return res.json({ success: false, error: { _error: 'could not verify user, please log in' } }).end(); }
    req.user = user; // eslint-disable-line
    next();
  })(req, res, next);
};

const requireSignin = (req, res, next) => {
  passport.authenticate('local', {
  session: false, }, (err, user, info) => { // eslint-disable-line
    if (err) {
      return res.status(422).json({
        success: false,
        error: {
          _error: 'server error, please try later',
        },
      }).end(); }
    if (!user) {
      return res.status(422).json({
        success: false,
        error: {
          _error: 'email or password is incorrect',
        },
      }).end(); }
    req.user = user; // eslint-disable-line
    next();
  })(req, res, next);
};

router.use(helmet());
router.use(bodyParser.json({
  type: '*/*',
}));

router.post('/signup', signup);
router.post('/signin', requireSignin, signin);
router.get('/getUserFromToken', requireAuth, getUserFromToken);
router.post('/getPolls', getPolls);
router.post('/getSinglePoll', getSinglePoll);
router.post('/updatePollVotes', updatePollVotes);
router.get('/getUserPolls', requireAuth, getUserPolls);
router.delete('/deletePoll', requireAuth, deletePoll);
router.post('/savePoll', requireAuth, savePoll);

router.use((err, req, res, next) => {
  console.error(err.stack); // eslint-disable-line

  res.status(500).json({ success: false, error: { _error: 'server error, please retry later' } });
});

module.exports = router;
