import expect from 'expect';
import newPollReducer from '../reducer';
import { fromJS } from 'immutable';

describe('newPollReducer', () => {
  it('returns the initial state', () => {
    expect(newPollReducer(undefined, {}))
    .toEqual(fromJS({ pollSaved: false }));
  });
});
