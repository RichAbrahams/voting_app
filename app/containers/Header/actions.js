/*
 *
 * Header actions
 *
 */

import {
  GET_TOKEN_FROM_LOCAL_STORAGE,
  GET_VOTED_FROM_LOCAL_STORAGE,
  LOG_OUT,
  GET_USER_FROM_TOKEN,
  GET_USER_FROM_TOKEN_SUCCESS,
  GET_USER_FROM_TOKEN_ERROR,
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

export function getUserFromToken(token) {
  return {
    type: GET_USER_FROM_TOKEN,
    token,
  };
}
export function getUserFromTokenSuccess(data) {
  return {
    type: GET_USER_FROM_TOKEN_SUCCESS,
    data,
  };
}

export function getUserFromTokenError() {
  return {
    type: GET_USER_FROM_TOKEN_ERROR,
  };
}
