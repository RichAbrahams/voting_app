
import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_USER_FROM_TOKEN } from './constants';
import { getUserFromTokenSuccess, getUserFromTokenError } from './actions';
import { request } from 'utils/request';
import { } from './selectors';

export function* getUserFromTokenRequest(action) {
  const requestURL = '/api/getUserFromToken';
  const token = action.token;
  try {
    const makeReq = yield call(request, requestURL, { method: 'get', headers: { authorization: token } });
    if (makeReq.success === true) {
      yield put(getUserFromTokenSuccess(makeReq));
    } else {
      yield put(getUserFromTokenError());
    }
  } catch (err) {
    yield put(getUserFromTokenError());
  }
}

export function* getUserFromTokenWatcher() {
  yield fork(takeLatest, GET_USER_FROM_TOKEN, getUserFromTokenRequest);
}

export function* getUserFromToken() {
  const watcher = yield fork(getUserFromTokenWatcher);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// EXPORT

export default [
  getUserFromToken,
];
