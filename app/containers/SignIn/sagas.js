import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { request } from '../../utils/request';
import {
  SIGN_IN,
} from './constants';
import { SubmissionError } from 'redux-form/immutable';
import { signInSuccess } from './actions';

export function* signInRequest(action) {
  const requestURL = '/api/signin';
  const credentials = action.data.credentials.toJS();
  const payload = JSON.stringify(credentials);
  try {
    const makeReq = yield call(request, requestURL, { method: 'post', body: payload });
    if (makeReq.success === true) {
      yield put(signInSuccess(makeReq));
    } else {
      const error = makeReq.error || { _error: 'could not connect to server' };
      action.data.reject(new SubmissionError(error));
    }
  } catch (err) {
    action.data.reject(new SubmissionError({ _error: 'could not connect to server' }));
  }
}

export function* signInWatcher() {
  yield fork(takeLatest, SIGN_IN, signInRequest);
}

export function* signIn() {
  const watcher = yield fork(signInWatcher);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  signIn,
];
