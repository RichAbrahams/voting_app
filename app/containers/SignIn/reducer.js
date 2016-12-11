/*
 *
 * SignIn reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGN_IN_SUCCESS,
  RESET_SIGN_IN,
} from './constants';

const initialState = fromJS({
  signInSuccess: false,
});

function signInReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return state.set('signInSuccess', true);
    case RESET_SIGN_IN:
      return state.set('signInSuccess', false);
    default:
      return state;
  }
}

export default signInReducer;
