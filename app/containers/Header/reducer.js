/*
 *
 * Header reducer
 *
 */

import { fromJS } from 'immutable';

import {
  GET_TOKEN_FROM_LOCAL_STORAGE,
} from './constants';

const initialState = fromJS({
  username: 'potato',
  token: null,
});

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN_FROM_LOCAL_STORAGE:
      return state
        .set('token', action.token);
    default:
      return state;
  }
}

export default headerReducer;
