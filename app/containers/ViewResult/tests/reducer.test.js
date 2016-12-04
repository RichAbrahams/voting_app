import expect from 'expect';
import viewResultReducer from '../reducer';
import { fromJS } from 'immutable';

describe('viewResultReducer', () => {
  it('returns the initial state', () => {
    expect(viewResultReducer(undefined, {})).toEqual(fromJS({
      loadPollResultError: false,
      finishedLoading: false,
      question: '',
      createdBy: '',
      options: [
        { opt: '',
          votes: 0,
        },
      ],
    }));
  });
});
