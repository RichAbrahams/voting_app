import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { request } from '../../utils/request';
import {
  SIGN_UP,
} from './constants';
import { SubmissionError } from 'redux-form/immutable';
import { signUpSuccess } from './actions';

export function* signUpRequest(action) {
  const requestURL = '/api/signup';
  const credentials = action.data.credentials.toJS();
  const payload = JSON.stringify(credentials);
  try {
    const makeReq = yield call(request, requestURL, { method: 'post', body: payload });
    if (makeReq.success === true) {
      yield put(signUpSuccess(makeReq));
    } else {
      const error = makeReq.error || { _error: 'could not connect to server' };
      action.data.reject(new SubmissionError(error));
    }
  } catch (err) {
    action.data.reject(new SubmissionError({ _error: 'could not connect to server' }));
  }
}

export function* signUpWatcher() {
  yield fork(takeLatest, SIGN_UP, signUpRequest);
}

export function* signUp() {
  const watcher = yield fork(signUpWatcher);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  signUp,
];
