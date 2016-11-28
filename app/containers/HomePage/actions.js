/*
 *
 * HomePage actions
 *
 */

import {
  LOADING_FALSE,
  LOADING_TRUE,
  LOAD_NEXT_POLLS,
  LOAD_PREVIOUS_POLLS,
  NEXT_POLLS_LOADED,
  NEXT_POLLS_LOADING_ERROR,
  PREVIOUS_POLLS_LOADED,
  PREVIOUS_POLLS_LOADING_ERROR,
} from './constants';

export function loadingFalse() {
  return {
    type: LOADING_FALSE,
  };
}

export function loadingTrue() {
  return {
    type: LOADING_TRUE,
  };
}

export function loadNextPolls() {
  return {
    type: LOAD_NEXT_POLLS,
  };
}

export function loadPreviousPolls() {
  return {
    type: LOAD_PREVIOUS_POLLS,
  };
}

export function nextPollsLoaded(data) {
  return {
    type: NEXT_POLLS_LOADED,
    data,
  };
}

export function nextPollsLoadingError() {
  return {
    type: NEXT_POLLS_LOADING_ERROR,
  };
}

export function previousPollsLoaded(data) {
  return {
    type: PREVIOUS_POLLS_LOADED,
    data,
  };
}

export function previousPollsLoadingError() {
  return {
    type: PREVIOUS_POLLS_LOADING_ERROR,
  };
}
