/*
 *
 * MyPolls actions
 *
 */

import {
  LOAD_USER_POLLS,
  LOAD_USER_POLLS_SUCCESS,
  LOAD_USER_POLLS_ERROR,
  SET_SHOW_CONFIRM,
  DELETE_POLL,
  DELETE_POLL_POLL_SUCCESS,
  DELETE_POLL_POLL_ERROR,
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

export function setShowConfirm(url) {
  return {
    type: SET_SHOW_CONFIRM,
    url,
  };
}

export function deletePoll() {
  return {
    type: DELETE_POLL,
  };
}

export function deletePollSuccess(data) {
  return {
    type: DELETE_POLL_POLL_SUCCESS,
    data,
  };
}

export function deletePollError() {
  return {
    type: DELETE_POLL_POLL_ERROR,
  };
}
