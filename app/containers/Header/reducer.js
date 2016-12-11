/*
 *
 * Header reducer
 *
 */

import { fromJS } from 'immutable';

import {
  GET_VOTED_FROM_LOCAL_STORAGE,
  GET_TOKEN_FROM_LOCAL_STORAGE,
  LOG_OUT,
} from './constants';

import {
  SAVE_VOTE_SUCCESS,
} from '../ViewPoll/constants';

const initialState = fromJS({
  username: 'potato',
  token: null,
  voted: [],
});

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VOTED_FROM_LOCAL_STORAGE: {
      return state
        .set('voted', fromJS(action.voted));
    }
    case GET_TOKEN_FROM_LOCAL_STORAGE: {
      return state
        .set('token', fromJS(action.token));
    }
    case SAVE_VOTE_SUCCESS: {
      return state
        .set('voted', fromJS(action.data.voted));
    }
    case LOG_OUT: {
      return state
        .set('username', null)
        .set('token', null);
    }
    default:
      return state;
  }
}

export default headerReducer;
