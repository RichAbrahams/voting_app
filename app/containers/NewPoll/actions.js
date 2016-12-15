/*
 *
 * NewPoll actions
 *
 */

import {
  SAVE_POLL,
  SAVE_POLL_SUCCESS,
  RESET_SAVE_POLL,
} from './constants';

export function savePoll(data) {
  return {
    type: SAVE_POLL,
    data,
  };
}

export function savePollSuccess(data) {
  return {
    type: SAVE_POLL_SUCCESS,
    data,
  };
}

export function resetForm() {
  return {
    type: RESET_SAVE_POLL,
  };
}
