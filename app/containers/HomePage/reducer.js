/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOADING_FALSE,
  LOADING_TRUE,
  NEXT_POLLS_LOADED,
  NEXT_POLLS_LOADING_ERROR,
  PREVIOUS_POLLS_LOADED,
  PREVIOUS_POLLS_LOADING_ERROR,
} from './constants';

const initialState = fromJS({
  loading: true,
  currentPage: 0,
  polls: false,
  loadingError: false,
  pollCount: false,
  voted: JSON.parse(localStorage.getItem('voted')) || [],
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_FALSE:
      return state
        .set('loading', false);
    case LOADING_TRUE:
      return state
        .set('loading', true);
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
      return state;
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
      return state;
    default:
      return state;
  }
}

export default homePageReducer;
