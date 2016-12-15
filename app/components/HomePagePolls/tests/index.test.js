import HomePagePolls from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { fromJS } from 'immutable';
import HomePagePollListItem from '../../HomePagePollListItem';
import UL from '../HomePageUL';

describe('<HomePagePolls />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      polls: fromJS([{ poll: 1 }, { poll: 2 }]),
      voted: fromJS([]),
      viewPoll: () => {},
      viewResult: () => {},
    };
    renderedComponent = shallow(
      <HomePagePolls {...props} />
    );
  });
  it('should render a UL', () => {
    expect(renderedComponent.find(UL).length).toEqual(1);
  });
  it('should render 2 HomePagePollListItem', () => {
    expect(renderedComponent.find(HomePagePollListItem).length).toEqual(2);
  });
});
