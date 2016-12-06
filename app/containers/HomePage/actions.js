/*
 *
 * HomePage actions
 *
 */

import {
  LOADING_FALSE,
  LOADING_TRUE,
  LOAD_POLLS,
  POLLS_LOADED,
  POLLS_LOADING_ERROR,
  LOAD_NEXT_POLLS,
  LOAD_PREVIOUS_POLLS,
  NEXT_POLLS_LOADED,
  NEXT_POLLS_LOADING_ERROR,
  PREVIOUS_POLLS_LOADED,
  PREVIOUS_POLLS_LOADING_ERROR,
  GET_VOTED_FROM_LOCAL_STORAGE,
} from './constants';


// Loading Flags

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

// initial load polls

export function loadPolls() {
  return {
    type: LOAD_POLLS,
  };
}

export function pollsLoaded(data) {
  return {
    type: POLLS_LOADED,
    data,
  };
}

export function pollsLoadingError() {
  return {
    type: POLLS_LOADING_ERROR,
  };
}


// Load next polls

export function loadNextPolls() {
  return {
    type: LOAD_NEXT_POLLS,
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

// Load previous polls

export function loadPreviousPolls() {
  return {
    type: LOAD_PREVIOUS_POLLS,
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

// localStorage middleware actions

export function getVotedFromLocalStorage(voted) {
  return {
    type: GET_VOTED_FROM_LOCAL_STORAGE,
    voted,
  };
}
