import expect from 'expect';
import {
  getTokenFromLocalStorage,
} from '../actions';
import {
  GET_TOKEN_FROM_LOCAL_STORAGE,
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
});
