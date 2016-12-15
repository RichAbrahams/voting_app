import ViewPollList from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import UL from '../UL';
import ViewPollListItem from '../../ViewPollListItem';
import { fromJS } from 'immutable';

describe('<ViewPollList />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      options: fromJS([{ votes: 10, opt: 'test' }, { votes: 10, opt: 'another test' }]),
      id: 'test',
      url: 'test',
      saveVote: () => {},
    };
  });
  it('should render 2 ViewPollListItem', () => {
    renderedComponent = shallow(
      <ViewPollList {... props} />
    );
    expect(renderedComponent.find(ViewPollListItem).length).toEqual(2);
  });
  it('should render 1 UL', () => {
    renderedComponent = shallow(
      <ViewPollList {... props} />
    );
    expect(renderedComponent.find(UL).length).toEqual(1);
  });
});
