/* eslint no-unused-vars: 0 */
/* eslint no-console: 0 */
/* eslint consistent-return: 0 */
/* eslint no-param-reassign: 0 */
import { GET_VOTED_FROM_LOCAL_STORAGE } from '../containers/HomePage/constants';
import { GET_TOKEN_FROM_LOCAL_STORAGE } from '../containers/Header/constants';

export function getVoted({ dispatch }) {
  return (next) => (action) => {
    if (action.type !== GET_VOTED_FROM_LOCAL_STORAGE) {
      return next(action);
    }
    action.voted = JSON.parse(localStorage.getItem('voted')) || [];
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

export function setVoted({ dispatch }) {
  return (next) => (action) => {
    next(action);
  };
}

export function setToken({ dispatch }) {
  return (next) => (action) => {
    next(action);
  };
}
