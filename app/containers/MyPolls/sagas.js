
import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_USER_POLLS } from './constants';
import { loadUserPollsSuccess, loadUserPollsError } from './actions';
import { request } from 'utils/request';
import { selectToken } from 'containers/Header/selectors';

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

export default [
  loadUserPolls,
];
