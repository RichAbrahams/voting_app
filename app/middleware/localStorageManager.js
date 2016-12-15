/* eslint no-unused-vars: 0 */
/* eslint no-console: 0 */
/* eslint consistent-return: 0 */
/* eslint no-param-reassign: 0 */
import { GET_VOTED_FROM_LOCAL_STORAGE, GET_TOKEN_FROM_LOCAL_STORAGE, LOG_OUT } from '../containers/Header/constants';
import { SAVE_VOTE_SUCCESS } from '../containers/ViewPoll/constants';
import { SIGN_IN_SUCCESS } from '../containers/SignIn/constants';
import { SIGN_UP_SUCCESS } from '../containers/SignUp/constants';

export function getVoted({ dispatch }) {
  return (next) => (action) => {
    if (action.type !== GET_VOTED_FROM_LOCAL_STORAGE) {
      return next(action);
    }
    action.voted = JSON.parse(localStorage.getItem('voted')) || [];
    next(action);
  };
}

export function setVoted({ dispatch }) {
  return (next) => (action) => {
    if (action.type !== SAVE_VOTE_SUCCESS) {
      return next(action);
    }
    const url = action.data.url;
    const Ls = JSON.parse(localStorage.getItem('voted')) || [];
    Ls.push(url);
    localStorage.setItem('voted', JSON.stringify(Ls));
    action.data.voted = Ls;
    next(action);
  };
}

export function getToken({ dispatch }) {
  return (next) => (action) => {
    if (action.type !== GET_TOKEN_FROM_LOCAL_STORAGE) {
      return next(action);
    }
    action.token = JSON.parse(localStorage.getItem('token')) || null;
    next(action);
  };
}

export function setToken({ dispatch }) {
  return (next) => (action) => {
    if ((action.type !== SIGN_IN_SUCCESS) && (action.type !== SIGN_UP_SUCCESS)) {
      return next(action);
    }
    const token = action.data.token;
    localStorage.setItem('token', JSON.stringify(token));
    next(action);
  };
}

export function deleteToken({ dispatch }) {
  return (next) => (action) => {
    if (action.type !== LOG_OUT) {
      return next(action);
    }
    localStorage.removeItem('token');
    next(action);
  };
}
