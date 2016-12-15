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
  GET_USER_FROM_TOKEN_SUCCESS,
  GET_USER_FROM_TOKEN_ERROR,
} from './constants';

import {
  SAVE_VOTE_SUCCESS,
} from '../ViewPoll/constants';

import {
  SIGN_IN_SUCCESS,
} from '../SignIn/constants';

import {
  SIGN_UP_SUCCESS,
} from '../SignUp/constants';

const initialState = fromJS({
  username: null,
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
    case SIGN_IN_SUCCESS: {
      return state
        .set('username', action.data.username)
        .set('token', action.data.token);
    }
    case SIGN_UP_SUCCESS: {
      return state
        .set('username', action.data.username)
        .set('token', action.data.token);
    }
    case GET_USER_FROM_TOKEN_SUCCESS: {
      return state
        .set('username', action.data.username);
    }
    case GET_USER_FROM_TOKEN_ERROR: {
      return state
        .set('token', null);
    }
    default:
      return state;
  }
}

export default headerReducer;
