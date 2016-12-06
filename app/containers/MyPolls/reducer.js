/*
 *
 * MyPolls reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_USER_POLLS,
  LOAD_USER_POLLS_SUCCESS,
  LOAD_USER_POLLS_ERROR,
} from './constants';

const initialState = fromJS({
  loading: true,
  loadingError: false,
  polls: [],
});

function myPollsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_POLLS:
      return state
        .set('loading', true);
    case LOAD_USER_POLLS_SUCCESS:
      return state
          .set('loading', false)
          .set('loadingError', false)
          .set('polls', action.data);
    case LOAD_USER_POLLS_ERROR:
      return state
          .set('loading', false)
          .set('loadingError', false)
          .set('polls', fromJS([]));
    default:
      return state;
  }
}

export default myPollsReducer;
