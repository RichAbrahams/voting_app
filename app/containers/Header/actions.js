/*
 *
 * Header actions
 *
 */

import {
  GET_TOKEN_FROM_LOCAL_STORAGE,
} from './constants';

export function getTokenFromLocalStorage(token) {
  return {
    type: GET_TOKEN_FROM_LOCAL_STORAGE,
    token,
  };
}
