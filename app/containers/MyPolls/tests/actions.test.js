import expect from 'expect';
import {
  loadUserPolls,
  loadUserPollsSuccess,
  loadUserPollsError,
  setShowConfirm,
  deletePoll,
  deletePollSuccess,
  deletePollError,
} from '../actions';
import {
  LOAD_USER_POLLS,
  LOAD_USER_POLLS_SUCCESS,
  LOAD_USER_POLLS_ERROR,
  SET_SHOW_CONFIRM,
  DELETE_POLL,
  DELETE_POLL_POLL_SUCCESS,
  DELETE_POLL_POLL_ERROR,
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
  describe('setShowConfirm', () => {
    it('has a type of SET_SHOW_CONFIRM', () => {
      const expected = {
        type: SET_SHOW_CONFIRM,
        url: 'test',
      };
      expect(setShowConfirm('test')).toEqual(expected);
    });
  });
  describe('deletePoll', () => {
    it('has a type of DELETE_POLL', () => {
      const expected = {
        type: DELETE_POLL,
      };
      expect(deletePoll()).toEqual(expected);
    });
  });
  describe('deletePollSuccess', () => {
    it('has a type of DELETE_POLL_POLL_SUCCESS', () => {
      const expected = {
        type: DELETE_POLL_POLL_SUCCESS,
        data: {},
      };
      expect(deletePollSuccess({})).toEqual(expected);
    });
  });
  describe('deletePollError', () => {
    it('has a type of DELETE_POLL_POLL_SUCCESS', () => {
      const expected = {
        type: DELETE_POLL_POLL_ERROR,
      };
      expect(deletePollError()).toEqual(expected);
    });
  });
});
