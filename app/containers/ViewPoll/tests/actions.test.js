import expect from 'expect';
import {
  loadPoll,
  loadPollSuccess,
  loadPollError,
  saveVote,
  saveVoteSuccess,
  saveVoteError,
  resetComponent,
} from '../actions';
import {
    LOAD_POLL,
    LOAD_POLL_SUCCESS,
    LOAD_POLL_ERROR,
    SAVE_VOTE,
    SAVE_VOTE_SUCCESS,
    SAVE_VOTE_ERROR,
    RESET_COMPONENT,

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
  describe('saveVote', () => {
    it('has a type of SAVE_VOTE', () => {
      const expected = {
        type: SAVE_VOTE,
        vote: 'test',
      };
      expect(saveVote('test')).toEqual(expected);
    });
  });
  describe('saveVoteSuccess', () => {
    it('has a type of SAVE_VOTE_SUCCESS', () => {
      const expected = {
        type: SAVE_VOTE_SUCCESS,
        data: 'test',
      };
      expect(saveVoteSuccess('test')).toEqual(expected);
    });
  });
  describe('saveVoteError', () => {
    it('has a type of SAVE_VOTE_ERROR', () => {
      const expected = {
        type: SAVE_VOTE_ERROR,
      };
      expect(saveVoteError()).toEqual(expected);
    });
  });
  describe('resetComponent', () => {
    it('has a type of RESET_COMPONENT', () => {
      const expected = {
        type: RESET_COMPONENT,
      };
      expect(resetComponent()).toEqual(expected);
    });
  });
});
