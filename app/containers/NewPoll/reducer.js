/*
 *
 * NewPoll reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SAVE_POLL_SUCCESS,
  RESET_SAVE_POLL,
} from './constants';

const initialState = fromJS({
  pollSaved: false,
});

function newPollReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_POLL_SUCCESS:
      return state
        .set('pollSaved', true);
    case RESET_SAVE_POLL:
      return state
        .set('pollSaved', false);
    default:
      return state;
  }
}

export default newPollReducer;
