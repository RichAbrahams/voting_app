import expect from 'expect';
import {
  loadPoll,
  loadPollSuccess,
  loadPollError,
} from '../actions';
import {
  LOAD_POLL,
  LOAD_POLL_SUCCESS,
  LOAD_POLL_ERROR,
} from '../constants';


describe('ViewPoll actions', () => {
  describe('loadPoll', () => {
    it('has a type of LOAD_POLL', () => {
      const expected = {
        type: LOAD_POLL,
        url: 'test',
      };
      expect(loadPoll('test')).toEqual(expected);
    });
  });
  describe('loadPollSuccess', () => {
    it('has a type of LOAD_POLL_SUCCESS', () => {
      const expected = {
        type: LOAD_POLL_SUCCESS,
        data: { test: 'test' },
      };
      expect(loadPollSuccess({ test: 'test' })).toEqual(expected);
    });
  });
  describe('loadPollError', () => {
    it('has a type of LOAD_POLL_ERROR', () => {
      const expected = {
        type: LOAD_POLL_ERROR,
      };
      expect(loadPollError()).toEqual(expected);
    });
  });
});
