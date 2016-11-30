/**
 * Gets the repositories of the user from Github
 */

import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_POLLS, LOAD_NEXT_POLLS, LOAD_PREVIOUS_POLLS } from './constants';
import { pollsLoaded, pollsLoadingError, nextPollsLoaded, nextPollsLoadingError, previousPollsLoaded, previousPollsLoadingError } from './actions';
import { request } from 'utils/request';
import { selectCurrentPage } from 'containers/HomePage/selectors';

// GET POLLS

export function* getPollsRequest() {
  const requestURL = '/api/getPolls';
  const limit = 25;
  const skip = 0;
  const payload = JSON.stringify({ skip, limit });
  try {
    const makeReq = yield call(request, requestURL, { method: 'post', body: payload });
    if (makeReq.success === true) {
      yield put(pollsLoaded(makeReq));
    } else {
      yield put(pollsLoadingError());
    }
  } catch (err) {
    yield put(pollsLoadingError());
  }
}

export function* getPollsWatcher() {
  yield fork(takeLatest, LOAD_POLLS, getPollsRequest);
}

export function* getPolls() {
  const watcher = yield fork(getPollsWatcher);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// NEXT POLLS

export function* getNextPollsRequest() {
  const requestURL = '/api/getPolls';
  const currentPage = yield select(selectCurrentPage());
  const limit = 25;
  const skip = (currentPage) * limit;
  const payload = JSON.stringify({ skip, limit });
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

// PREVIOUS POLLS

export function* getPreviousPollsRequest() {
  const requestURL = '/api/getPolls';
  const currentPage = yield select(selectCurrentPage());
  const limit = 25;
  const skip = (currentPage - 2) * limit;
  const payload = JSON.stringify({ skip, limit });
  try {
    const makeReq = yield call(request, requestURL, { method: 'post', body: payload });
    if (makeReq.success === true) {
      yield put(previousPollsLoaded(makeReq));
    } else {
      yield put(previousPollsLoadingError());
    }
  } catch (err) {
    yield put(previousPollsLoadingError());
  }
}

export function* getPreviousPollsWatcher() {
  yield fork(takeLatest, LOAD_PREVIOUS_POLLS, getPreviousPollsRequest);
}

export function* getPreviousPolls() {
  const watcher = yield fork(getPreviousPollsWatcher);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// EXPORT

export default [
  getNextPolls,
  getPreviousPolls,
  getPolls,
];
