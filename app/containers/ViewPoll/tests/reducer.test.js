import expect from 'expect';
import viewPollReducer from '../reducer';
import { fromJS } from 'immutable';

describe('viewPollReducer', () => {
  it('returns the initial state', () => {
    expect(viewPollReducer(undefined, {})).toEqual(fromJS({
      loadPollError: false,
      finishedLoading: false,
      id: '',
      question: '',
      createdBy: '',
      options: [
        { opt: '',
          votes: 0,
        },
      ],
      voteSaved: false,
    }));
  });
});
