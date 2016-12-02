/*
 *
 * ViewResult reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_POLL_RESULT_SUCCESS,
  LOAD_POLL_RESULT_ERROR,
} from './constants';

const initialState = fromJS({
  loadPollResultError: false,
  poll: false,
});

function viewResultReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POLL_RESULT_SUCCESS:
      return state
        .set('loadPollResultError', false)
        .set('poll', fromJS(action.data.poll));
    case LOAD_POLL_RESULT_ERROR:
      return state
        .set('poll', false)
        .set('loadPollResultError', true);
    default:
      return state;
  }
}

export default viewResultReducer;
