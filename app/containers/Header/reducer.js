/*
 *
 * Header reducer
 *
 */

import { fromJS } from 'immutable';

import {
  GET_VOTED_FROM_LOCAL_STORAGE,
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
    case SAVE_VOTE_SUCCESS: {
      return state
        .set('voted', fromJS(action.data.voted));
    }
    default:
      return state;
  }
}

export default headerReducer;
