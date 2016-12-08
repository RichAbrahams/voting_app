/*
 *
 * ViewPoll actions
 *
 */

import {
  LOAD_POLL,
  LOAD_POLL_SUCCESS,
  LOAD_POLL_ERROR,
  SAVE_VOTE,
  SAVE_VOTE_SUCCESS,
  SAVE_VOTE_ERROR,
} from './constants';

export function loadPoll(url) {
  return {
    type: LOAD_POLL,
    url,
  };
}

export function loadPollSuccess(data) {
  return {
    type: LOAD_POLL_SUCCESS,
    data,
  };
}

export function loadPollError() {
  return {
    type: LOAD_POLL_ERROR,
  };
}

export function saveVote(vote) {
  return {
    type: SAVE_VOTE,
    vote,
  };
}

export function saveVoteSuccess(data) {
  return {
    type: SAVE_VOTE_SUCCESS,
    data,
  };
}

export function saveVoteError() {
  return {
    type: SAVE_VOTE_ERROR,
  };
}
