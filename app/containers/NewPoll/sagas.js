import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { request } from '../../utils/request';
import {
  SAVE_POLL,
} from './constants';
import { savePollSuccess } from './actions';
import { SubmissionError } from 'redux-form/immutable';
import { selectToken } from '../Header/selectors';

export function* savePollRequest(action) {
  const requestURL = '/api/savePoll';
  const payload = JSON.stringify(action.data.poll.toJS());
  const token = yield select(selectToken());
  try {
    const makeReq = yield call(request, requestURL, { method: 'post', headers: { authorization: token }, body: payload });
    if (makeReq.success === true) {
      yield put(savePollSuccess(makeReq));
    } else {
      const error = makeReq.error || { _error: 'could not connect to server' };
      action.data.reject(new SubmissionError(error));
    }
  } catch (err) {
    action.data.reject(new SubmissionError({ _error: 'could not connect to server' }));
  }
}

export function* savePollWatcher() {
  yield fork(takeLatest, SAVE_POLL, savePollRequest);
}

export function* savePoll() {
  const watcher = yield fork(savePollWatcher);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  savePoll,
];
