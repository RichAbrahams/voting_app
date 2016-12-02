import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_POLL_RESULT } from './constants';
import { loadPollResultSuccess, loadPollResultError } from './actions';
import { request } from 'utils/request';

// GET POLL

export function* getPollResultRequest(action) {
  const requestURL = '/api/getSinglePoll';
  const payload = JSON.stringify({ url: action.url });
  try {
    const makeReq = yield call(request, requestURL, { method: 'post', body: payload });
    if (makeReq.success === true) {
      yield put(loadPollResultSuccess(makeReq));
    } else {
      yield put(loadPollResultError());
    }
  } catch (err) {
    yield put(loadPollResultError());
  }
}

export function* getPollResultWatcher() {
  yield fork(takeLatest, LOAD_POLL_RESULT, getPollResultRequest);
}

export function* getPollResult() {
  const watcher = yield fork(getPollResultWatcher);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// EXPORT

export default [
  getPollResult,
];
