/*
 *
 * ViewResult reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_POLL_RESULT_SUCCESS,
  LOAD_POLL_RESULT_ERROR,
  RESET_CHART,
} from './constants';

const initialState = fromJS({
  loadPollResultError: false,
  finishedLoading: false,
  question: '',
  createdBy: '',
  options: [
    { opt: '',
      votes: 0,
    },
  ],
});

function viewResultReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POLL_RESULT_SUCCESS:
      return state
        .set('loadPollResultError', false)
        .set('finishedLoading', true)
        .set('question', action.data.poll.question)
        .set('createdBy', action.data.poll.createdBy)
        .set('options', fromJS(action.data.poll.options));
    case LOAD_POLL_RESULT_ERROR:
      return state
        .set('finishedLoading', true)
        .set('loadPollResultError', true)
        .set('question', '')
        .set('createdBy', '')
        .set('options', fromJS([]));
    case RESET_CHART:
      return state
        .set('finishedLoading', false)
        .set('loadPollResultError', false)
        .set('question', '')
        .set('createdBy', '')
        .set('options', fromJS([]));
    default:
      return state;
  }
}

export default viewResultReducer;
