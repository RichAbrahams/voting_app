import expect from 'expect';
import {
  loadingFalse,
  loadingTrue,
  loadNextPolls,
  loadPreviousPolls,
  nextPollsLoaded,
  nextPollsLoadingError,
  previousPollsLoaded,
  previousPollsLoadingError,
  loadPolls,
  pollsLoaded,
  pollsLoadingError,
} from '../actions';
import {
  LOADING_FALSE,
  LOADING_TRUE,
  LOAD_NEXT_POLLS,
  LOAD_PREVIOUS_POLLS,
  NEXT_POLLS_LOADED,
  NEXT_POLLS_LOADING_ERROR,
  PREVIOUS_POLLS_LOADED,
  PREVIOUS_POLLS_LOADING_ERROR,
  LOAD_POLLS,
  POLLS_LOADED,
  POLLS_LOADING_ERROR,

} from '../constants';

describe('HomePage actions', () => {
  describe('loadingFalse', () => {
    it('has a type of LOADING_FALSE', () => {
      const expected = {
        type: LOADING_FALSE,
      };
      expect(loadingFalse()).toEqual(expected);
    });
  });
  describe('loadingTrue', () => {
    it('has a type of LOADING_TRUE', () => {
      const expected = {
        type: LOADING_TRUE,
      };
      expect(loadingTrue()).toEqual(expected);
    });
  });
  describe('loadNextPolls', () => {
    it('has a type of LOAD_NEXT_POLLS', () => {
      const expected = {
        type: LOAD_NEXT_POLLS,
      };
      expect(loadNextPolls()).toEqual(expected);
    });
  });
  describe('loadPreviousPolls', () => {
    it('has a type of LOAD_PREVIOUS_POLLS', () => {
      const expected = {
        type: LOAD_PREVIOUS_POLLS,
      };
      expect(loadPreviousPolls()).toEqual(expected);
    });
  });
  describe('nextPollsLoaded', () => {
    it('has a type of NEXT_POLLS_LOADED', () => {
      const expected = {
        type: NEXT_POLLS_LOADED,
        data: { data: 'test' },
      };
      expect(nextPollsLoaded({ data: 'test' })).toEqual(expected);
    });
  });
  describe('nextPollsLoadingError', () => {
    it('has a type of NEXT_POLLS_LOADING_ERROR', () => {
      const expected = {
        type: NEXT_POLLS_LOADING_ERROR,
      };
      expect(nextPollsLoadingError()).toEqual(expected);
    });
  });
  describe('previousPollsLoaded', () => {
    it('has a type of PREVIOUS_POLLS_LOADED', () => {
      const expected = {
        type: PREVIOUS_POLLS_LOADED,
        data: { data: 'test' },
      };
      expect(previousPollsLoaded({ data: 'test' })).toEqual(expected);
    });
  });
  describe('previousPollsLoadingError', () => {
    it('has a type of PREVIOUS_POLLS_LOADING_ERROR', () => {
      const expected = {
        type: PREVIOUS_POLLS_LOADING_ERROR,
      };
      expect(previousPollsLoadingError()).toEqual(expected);
    });
  });
  describe('loadPolls', () => {
    it('has a type of LOAD_POLLS', () => {
      const expected = {
        type: LOAD_POLLS,
      };
      expect(loadPolls()).toEqual(expected);
    });
  });
  describe('pollsLoaded', () => {
    it('has a type of POLLS_LOADED', () => {
      const expected = {
        type: POLLS_LOADED,
        data: { data: 'test' },
      };
      expect(pollsLoaded({ data: 'test' })).toEqual(expected);
    });
  });
  describe('pollsLoadingError', () => {
    it('has a type of POLLS_LOADING_ERROR', () => {
      const expected = {
        type: POLLS_LOADING_ERROR,
      };
      expect(pollsLoadingError()).toEqual(expected);
    });
  });
});
