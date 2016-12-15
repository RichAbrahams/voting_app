import expect from 'expect';
import {
  savePoll,
  savePollSuccess,
  resetForm,
} from '../actions';
import {
    SAVE_POLL,
    SAVE_POLL_SUCCESS,
    RESET_SAVE_POLL,
} from '../constants';

describe('NewPoll actions', () => {
  describe('savePoll', () => {
    it('has a type of SAVE_POLL', () => {
      const expected = {
        type: SAVE_POLL,
        data: {},
      };
      expect(savePoll({})).toEqual(expected);
    });
  });
  describe('savePollSuccess', () => {
    it('has a type of SAVE_POLL_SUCCESS', () => {
      const expected = {
        type: SAVE_POLL_SUCCESS,
        data: {},
      };
      expect(savePollSuccess({})).toEqual(expected);
    });
  });
  describe('resetForm', () => {
    it('has a type of RESET_SAVE_POLL', () => {
      const expected = {
        type: RESET_SAVE_POLL,
      };
      expect(resetForm()).toEqual(expected);
    });
  });
});
