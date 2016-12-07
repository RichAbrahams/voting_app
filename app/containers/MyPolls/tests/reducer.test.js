import expect from 'expect';
import myPollsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('myPollsReducer', () => {
  it('returns the initial state', () => {
    expect(myPollsReducer(undefined, {})).toEqual(fromJS({
      loading: true,
      loadingError: false,
      polls: [],
      showConfirm: null,
      selectedPoll: null,
    }));
  });
});
