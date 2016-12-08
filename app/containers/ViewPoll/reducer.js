/*
 *
 * ViewPoll reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_POLL_SUCCESS,
  LOAD_POLL_ERROR,
  SAVE_VOTE_SUCCESS,
} from './constants';

const initialState = fromJS({
  loadPollError: false,
  finishedLoading: false,
  id: '',
  question: '',
  createdBy: '',
  options: [
    { opt: '',
      votes: 0,
    },
  ],
});

function viewPollReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POLL_SUCCESS:
      return state
          .set('loadPollError', false)
          .set('finishedLoading', true)
          .set('id', action.data.poll._id) //eslint-disable-line
          .set('question', action.data.poll.question)
          .set('createdBy', action.data.poll.createdBy)
          .set('options', fromJS(action.data.poll.options));
    case LOAD_POLL_ERROR:
      return state
          .set('finishedLoading', true)
          .set('loadPollError', true)
          .set('question', '')
          .set('createdBy', '')
          .set('options', fromJS([]));
    case SAVE_VOTE_SUCCESS:
      return state;
    default:
      return state;
  }
}

export default viewPollReducer;
