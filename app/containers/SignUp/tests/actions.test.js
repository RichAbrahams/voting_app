import expect from 'expect';
import {
  signUp,
  signUpSuccess,
  resetSignUp,
} from '../actions';
import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  RESET_SIGN_UP,
} from '../constants';

describe('SignIn actions', () => {
  describe('signUp', () => {
    it('has a type of SIGN_IN', () => {
      const expected = {
        type: SIGN_UP,
        data: 'test',
      };
      expect(signUp('test')).toEqual(expected);
    });
  });
  describe('signUpSuccess', () => {
    it('has a type of SIGN_UP_SUCCESS', () => {
      const expected = {
        type: SIGN_UP_SUCCESS,
        data: 'test',
      };
      expect(signUpSuccess('test')).toEqual(expected);
    });
  });
  describe('resetSignUp', () => {
    it('has a type of RESET_SIGN_UP', () => {
      const expected = {
        type: RESET_SIGN_UP,
      };
      expect(resetSignUp()).toEqual(expected);
    });
  });
});
