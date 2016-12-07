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
  SET_SHOW_CONFIRM,
  DELETE_POLL_POLL_SUCCESS,
  DELETE_POLL_POLL_ERROR,
} from './constants';

const initialState = fromJS({
  loading: true,
  loadingError: false,
  polls: [],
  showConfirm: null,
  selectedPoll: null,
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
          .set('polls', fromJS(action.data));
    case LOAD_USER_POLLS_ERROR:
      return state
          .set('loading', false)
          .set('loadingError', false)
          .set('polls', fromJS([]));
    case SET_SHOW_CONFIRM:
      return state
          .set('showConfirm', action.url);
    case DELETE_POLL_POLL_SUCCESS: {
      let newPolls = state.get('polls');
      newPolls = newPolls.filterNot((item) => item.get('url') === action.data.url);
      return state
          .set('polls', newPolls)
          .set('showConfirm', null);
    }
    case DELETE_POLL_POLL_ERROR:
      return state;
    default:
      return state;
  }
}

export default myPollsReducer;
