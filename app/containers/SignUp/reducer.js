/*
 *
 * SignUp reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGN_UP_SUCCESS,
  RESET_SIGN_UP,
} from './constants';

const initialState = fromJS({
  signUpSuccess: false,
});

function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return state.set('signUpSuccess', true);
    case RESET_SIGN_UP:
      return state.set('signUpSuccess', false);
    default:
      return state;
  }
}

export default signUpReducer;
