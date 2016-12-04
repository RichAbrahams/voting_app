import expect from 'expect';
import {
  loadPollResult,
  loadPollResultSuccess,
  loadPollResultError,
} from '../actions';
import {
  LOAD_POLL_RESULT,
  LOAD_POLL_RESULT_SUCCESS,
  LOAD_POLL_RESULT_ERROR,
} from '../constants';

describe('ViewResult actions', () => {
  describe('loadPollResult', () => {
    it('has a type of LOAD_POLL_RESULT', () => {
      const expected = {
        type: LOAD_POLL_RESULT,
        url: 'test',
      };
      expect(loadPollResult('test')).toEqual(expected);
    });
  });
  describe('loadPollResultSuccess', () => {
    it('has a type of LOAD_POLL_RESULT_SUCCESS', () => {
      const expected = {
        type: LOAD_POLL_RESULT_SUCCESS,
        data: { test: 'test' },
      };
      expect(loadPollResultSuccess({ test: 'test' })).toEqual(expected);
    });
  });
  describe('loadPollResultError', () => {
    it('has a type of LOAD_POLL_RESULT_ERROR', () => {
      const expected = {
        type: LOAD_POLL_RESULT_ERROR,
      };
      expect(loadPollResultError()).toEqual(expected);
    });
  });
});
