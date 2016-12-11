/*
 *
 * Header actions
 *
 */

import {
  GET_TOKEN_FROM_LOCAL_STORAGE,
  GET_VOTED_FROM_LOCAL_STORAGE,
  LOG_OUT,
} from './constants';

export function getTokenFromLocalStorage(token) {
  return {
    type: GET_TOKEN_FROM_LOCAL_STORAGE,
    token,
  };
}

export function getVotedFromLocalStorage(voted) {
  return {
    type: GET_VOTED_FROM_LOCAL_STORAGE,
    voted,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}
