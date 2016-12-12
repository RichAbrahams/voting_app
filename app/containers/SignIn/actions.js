/*
 *
 * SignIn actions
 *
 */

import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  RESET_SIGN_IN,
} from './constants';

export function signIn(data) {
  return {
    type: SIGN_IN,
    data,
  };
}

export function signInSuccess(data) {
  return {
    type: SIGN_IN_SUCCESS,
    data,
  };
}

export function resetSignIn() {
  return {
    type: RESET_SIGN_IN,
  };
}
