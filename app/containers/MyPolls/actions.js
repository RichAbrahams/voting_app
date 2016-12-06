/*
 *
 * MyPolls actions
 *
 */

import {
  LOAD_USER_POLLS,
  LOAD_USER_POLLS_SUCCESS,
  LOAD_USER_POLLS_ERROR,
} from './constants';

export function loadUserPolls() {
  return {
    type: LOAD_USER_POLLS,
  };
}

export function loadUserPollsSuccess(data) {
  return {
    type: LOAD_USER_POLLS_SUCCESS,
    data,
  };
}

export function loadUserPollsError() {
  return {
    type: LOAD_USER_POLLS_ERROR,
  };
}
