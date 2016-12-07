/* eslint no-underscore-dangle:0 */
import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_USER_POLLS, DELETE_POLL } from './constants';
import { loadUserPollsSuccess, loadUserPollsError, deletePollSuccess, deletePollError } from './actions';
import { request } from 'utils/request';
import { selectToken } from 'containers/Header/selectors';
import { selectShowConfirm } from './selectors';

// LOAD USER POLLS

export function* loadUserPollsRequest() {
  const requestURL = '/api/getUserPolls';
  const token = yield select(selectToken());
  try {
    const makeReq = yield call(request, requestURL, { method: 'get', headers: { authorization: token } });
    if (makeReq.success === true) {
      yield put(loadUserPollsSuccess(makeReq.polls));
    } else {
      yield put(loadUserPollsError());
    }
  } catch (err) {
    yield put(loadUserPollsError());
  }
}

export function* loadUserPollsWatcher() {
  yield fork(takeLatest, LOAD_USER_POLLS, loadUserPollsRequest);
}

export function* loadUserPolls() {
  const watcher = yield fork(loadUserPollsWatcher);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// DELETE USER POLL
export function* deletePollRequest() {
  const requestURL = '/api/deletePoll';
  const token = yield select(selectToken());
  const url = yield select(selectShowConfirm());
  const payload = JSON.stringify({ url });
  try {
    const makeReq = yield call(request, requestURL, { method: 'delete', headers: { authorization: token }, body: payload });
    if (makeReq.data._id) {
      yield put(deletePollSuccess(makeReq.data));
    } else {
      yield put(deletePollError());
    }
  } catch (err) {
    yield put(deletePollError());
  }
}

export function* deletePollWatcher() {
  yield fork(takeLatest, DELETE_POLL, deletePollRequest);
}

export function* deletePoll() {
  const watcher = yield fork(deletePollWatcher);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  loadUserPolls,
  deletePoll,
];
