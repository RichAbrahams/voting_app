import expect from 'expect';
import {
  signIn,
  signInSuccess,
  resetSignIn,
} from '../actions';
import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    RESET_SIGN_IN,
} from '../constants';

describe('SignIn actions', () => {
  describe('signIn', () => {
    it('has a type of SIGN_IN', () => {
      const expected = {
        type: SIGN_IN,
        data: 'test',
      };
      expect(signIn('test')).toEqual(expected);
    });
  });
  describe('signInSuccess', () => {
    it('has a type of SIGN_IN_SUCCESS', () => {
      const expected = {
        type: SIGN_IN_SUCCESS,
        data: 'test',
      };
      expect(signInSuccess('test')).toEqual(expected);
    });
  });
  describe('resetSignIn', () => {
    it('has a type of RESET_SIGN_IN', () => {
      const expected = {
        type: RESET_SIGN_IN,
      };
      expect(resetSignIn()).toEqual(expected);
    });
  });
});
