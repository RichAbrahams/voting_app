/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOADING_FALSE,
  LOADING_TRUE,
  POLLS_LOADED,
  POLLS_LOADING_ERROR,
  NEXT_POLLS_LOADED,
  NEXT_POLLS_LOADING_ERROR,
  PREVIOUS_POLLS_LOADED,
  PREVIOUS_POLLS_LOADING_ERROR,
  UPDATE_VOTED,
} from './constants';

const initialState = fromJS({
  loading: true,
  currentPage: 0,
  polls: false,
  loadingError: false,
  pollCount: false,
  voted: [],
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_FALSE:
      return state
        .set('loading', false);
    case LOADING_TRUE:
      return state
        .set('loading', true);
    case POLLS_LOADED:
      return state
        .set('loading', false)
        .set('loadingError', false)
        .set('currentPage', 1)
        .set('pollCount', action.data.count)
        .set('polls', fromJS(action.data.polls));
    case POLLS_LOADING_ERROR:
      return state
        .set('loading', false)
        .set('loadingError', true);
    case NEXT_POLLS_LOADED: {
      const newPage = state.get('currentPage') + 1;
      return state
        .set('loading', false)
        .set('loadingError', false)
        .set('currentPage', fromJS(newPage))
        .set('pollCount', action.data.count)
        .set('polls', fromJS(action.data.polls));
    }
    case NEXT_POLLS_LOADING_ERROR:
      return state
        .set('loadingError', true);
    case PREVIOUS_POLLS_LOADED: {
      const newPage = state.get('currentPage') - 1;
      return state
        .set('loading', false)
        .set('loadingError', false)
        .set('currentPage', fromJS(newPage))
        .set('pollCount', action.data.count)
        .set('polls', fromJS(action.data.polls));
    }
    case PREVIOUS_POLLS_LOADING_ERROR:
      return state
        .set('loadingError', true);
    case UPDATE_VOTED: {
      const updatedVoted = state.get('voted').concat(fromJS(action.data));
      return state
        .set('voted', updatedVoted);
    }
    default:
      return state;
  }
}

export default homePageReducer;
