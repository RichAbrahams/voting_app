/*
 *
 * Header actions
 *
 */

import {
  GET_TOKEN_FROM_LOCAL_STORAGE,
  GET_VOTED_FROM_LOCAL_STORAGE,
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
