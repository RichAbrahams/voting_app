import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_POLL, SAVE_VOTE } from './constants';
import { loadPollSuccess, loadPollError, saveVoteSuccess, saveVoteError } from './actions';
import { request } from 'utils/request';

// GET POLL

export function* getPollRequest(action) {
  const requestURL = '/api/getSinglePoll';
  const payload = JSON.stringify({ url: action.url });
  try {
    const makeReq = yield call(request, requestURL, { method: 'post', body: payload });
    if (makeReq.success === true) {
      yield put(loadPollSuccess(makeReq));
    } else {
      yield put(loadPollError());
    }
  } catch (err) {
    yield put(loadPollError());
  }
}

export function* getPollWatcher() {
  yield fork(takeLatest, LOAD_POLL, getPollRequest);
}

export function* getPoll() {
  const watcher = yield fork(getPollWatcher);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// SAVE POLL

export function* saveVoteRequest(action) {
  const requestURL = '/api/updatePollVotes';
  const payload = JSON.stringify({ id: action.vote.id, opt: action.vote.opt, url: action.vote.url });
  try {
    const makeReq = yield call(request, requestURL, { method: 'post', body: payload });
    if (makeReq.success === true) {
      yield put(saveVoteSuccess(makeReq));
    } else {
      yield put(saveVoteError());
    }
  } catch (err) {
    yield put(saveVoteError());
  }
}

export function* saveVoteWatcher() {
  yield fork(takeLatest, SAVE_VOTE, saveVoteRequest);
}

export function* saveVote() {
  const watcher = yield fork(saveVoteWatcher);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// EXPORT

export default [
  getPoll,
  saveVote,
];
