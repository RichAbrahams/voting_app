/*
 *
 * ViewResult actions
 *
 */

import {
  LOAD_POLL_RESULT,
  LOAD_POLL_RESULT_SUCCESS,
  LOAD_POLL_RESULT_ERROR,
  RESET_CHART,
} from './constants';

export function loadPollResult(url) {
  return {
    type: LOAD_POLL_RESULT,
    url,
  };
}

export function loadPollResultSuccess(data) {
  return {
    type: LOAD_POLL_RESULT_SUCCESS,
    data,
  };
}

export function loadPollResultError() {
  return {
    type: LOAD_POLL_RESULT_ERROR,
  };
}

export function resetChart() {
  return {
    type: RESET_CHART,
  };
}
