import MyPollsList from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { fromJS } from 'immutable';
import UL from '../UL';

describe('<MyPollsList />', () => {
  let renderedComponent;
  let props;
  beforeEach(() => {
    props = {
      myPollsError: false,
      myPolls: fromJS([{
        _id: '584770e37ea6d516752d2ede',
        date: '2016-12-07T02:16:04.009Z',
        url: 'rJ_31bgHml',
        question: 'non mollit do quis?',
        createdBy: 'potato',
        __v: 0,
        options: [{ votes: 10, opt: 'test' }, { votes: 10, opt: 'another test' }],
      }]),
      viewPoll: () => {},
      deletePoll: () => {},
      setShowConfirm: () => {},
      showConfirm: false,
    };
    renderedComponent = shallow(
      <MyPollsList {... props} />
    );
  });
  it('should render a 1 UL', () => {
    expect(renderedComponent.find(UL).length).toEqual(1);
  });
});
