import expect from 'expect';
import {
  signInSuccess,
} from '../actions';
import {
  SIGN_IN_SUCCESS,
} from '../constants';

describe('SignIn actions', () => {
  describe('signInSuccess', () => {
    it('has a type of SIGN_IN_SUCCESS', () => {
      const expected = {
        type: SIGN_IN_SUCCESS,
      };
      expect(signInSuccess()).toEqual(expected);
    });
  });
});
