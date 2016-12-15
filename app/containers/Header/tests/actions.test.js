import expect from 'expect';
import {
  getTokenFromLocalStorage,
  getVotedFromLocalStorage,
  logOut,
  getUserFromToken,
  getUserFromTokenSuccess,
  getUserFromTokenError,
} from '../actions';
import {
  GET_TOKEN_FROM_LOCAL_STORAGE,
  GET_VOTED_FROM_LOCAL_STORAGE,
  LOG_OUT,
  GET_USER_FROM_TOKEN,
  GET_USER_FROM_TOKEN_SUCCESS,
  GET_USER_FROM_TOKEN_ERROR,
} from '../constants';

describe('Header actions', () => {
  describe('getTokenFromLocalStorage', () => {
    it('has a type of GET_TOKEN_FROM_LOCAL_STORAGE', () => {
      const expected = {
        type: GET_TOKEN_FROM_LOCAL_STORAGE,
        token: 'test',
      };
      expect(getTokenFromLocalStorage('test')).toEqual(expected);
    });
  });
  describe('getVotedFromLocalStorage', () => {
    it('has a type of GET_VOTED_FROM_LOCAL_STORAGE', () => {
      const expected = {
        type: GET_VOTED_FROM_LOCAL_STORAGE,
        voted: 'test',
      };
      expect(getVotedFromLocalStorage('test')).toEqual(expected);
    });
  });
  describe('logOut', () => {
    it('has a type of LOG_OUT', () => {
      const expected = {
        type: LOG_OUT,
      };
      expect(logOut()).toEqual(expected);
    });
  });
  describe('getUserFromToken', () => {
    it('has a type of GET_USER_FROM_TOKEN', () => {
      const expected = {
        type: GET_USER_FROM_TOKEN,
        token: 'test',
      };
      expect(getUserFromToken('test')).toEqual(expected);
    });
  });
  describe('getUserFromTokenSuccess', () => {
    it('has a type of GET_USER_FROM_TOKEN_SUCCESS', () => {
      const expected = {
        type: GET_USER_FROM_TOKEN_SUCCESS,
        data: {},
      };
      expect(getUserFromTokenSuccess({})).toEqual(expected);
    });
  });
  describe('getUserFromTokenError', () => {
    it('has a type of GET_USER_FROM_TOKEN_ERROR', () => {
      const expected = {
        type: GET_USER_FROM_TOKEN_ERROR,
      };
      expect(getUserFromTokenError()).toEqual(expected);
    });
  });
});
