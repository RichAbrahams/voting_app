/**
 * Gets the repositories of the user from Github
 */

import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_NEXT_POLLS } from './constants';
import { nextPollsLoaded, nextPollsLoadingError } from './actions';
import { request } from 'utils/request';
import { selectDbPosition } from 'containers/HomePage/selectors';

export function* getNextPollsRequest() {
  const requestURL = '/api/getPolls';
  const dbPosition = yield select(selectDbPosition());
  const payload = JSON.stringify({ skip: dbPosition });
  try {
    const makeReq = yield call(request, requestURL, { method: 'post', body: payload });
    if (makeReq.success === true) {
      yield put(nextPollsLoaded(makeReq));
    } else {
      yield put(nextPollsLoadingError());
    }
  } catch (err) {
    yield put(nextPollsLoadingError());
  }
}

export function* getNextPollsWatcher() {
  yield fork(takeLatest, LOAD_NEXT_POLLS, getNextPollsRequest);
}

export function* getNextPolls() {
  const watcher = yield fork(getNextPollsWatcher);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getNextPolls,
];
