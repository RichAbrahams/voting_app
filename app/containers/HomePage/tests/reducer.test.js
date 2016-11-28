import expect from 'expect';
import homePageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('homePageReducer', () => {
  it('returns the initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(fromJS({
      loading: true,
      dbPosition: 0,
      polls: false,
      loadingError: false,
    }));
  });
});
