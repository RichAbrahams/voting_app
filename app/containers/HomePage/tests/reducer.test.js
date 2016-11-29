import expect from 'expect';
import homePageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('homePageReducer', () => {
  it('returns the initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(fromJS({
      loading: true,
      currentPage: 0,
      polls: false,
      loadingError: false,
      pollCount: false,
      voted: [],
    }));
  });
});
