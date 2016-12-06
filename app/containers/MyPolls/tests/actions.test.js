import expect from 'expect';
import {
  loadUserPolls,
  loadUserPollsSuccess,
  loadUserPollsError,
} from '../actions';
import {
  LOAD_USER_POLLS,
  LOAD_USER_POLLS_SUCCESS,
  LOAD_USER_POLLS_ERROR,
} from '../constants';

describe('MyPolls actions', () => {
  describe('loadUserPolls', () => {
    it('has a type of LOAD_USER_POLLS', () => {
      const expected = {
        type: LOAD_USER_POLLS,
      };
      expect(loadUserPolls()).toEqual(expected);
    });
  });
  describe('loadUserPollsSuccess', () => {
    it('has a type of LOAD_USER_POLLS_SUCCESS', () => {
      const expected = {
        type: LOAD_USER_POLLS_SUCCESS,
        data: 'test',
      };
      expect(loadUserPollsSuccess('test')).toEqual(expected);
    });
  });
  describe('loadUserPollsError', () => {
    it('has a type of LOAD_USER_POLLS_ERROR', () => {
      const expected = {
        type: LOAD_USER_POLLS_ERROR,
      };
      expect(loadUserPollsError()).toEqual(expected);
    });
  });
});
