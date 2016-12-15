/*
 *
 * SignUp actions
 *
 */
import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  RESET_SIGN_UP,
} from './constants';

export function signUp(data) {
  return {
    type: SIGN_UP,
    data,
  };
}

export function signUpSuccess(data) {
  return {
    type: SIGN_UP_SUCCESS,
    data,
  };
}

export function resetSignUp() {
  return {
    type: RESET_SIGN_UP,
  };
}
