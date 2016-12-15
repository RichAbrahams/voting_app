/* eslint no-unused-vars:0 */

import HomePagePollListItem from '../index';
import { shallow } from 'enzyme';
import React from 'react';
import { fromJS } from 'immutable';
import expect from 'expect';
import LI from '../HomePageLI';
import QuestionWrapper from '../QuestionWrapper';
import DetailsWrapper from '../DetailsWrapper';
import Icon from '../Icon';

describe('<HomePagePollListItem />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      poll: fromJS({
        createdBy: 'test',
        url: 'test',
        question: 'test',
      }),
      voted: fromJS([]),
      viewPoll: () => {},
      viewResult: () => {},
    };
    renderedComponent = shallow(
      <HomePagePollListItem {...props} />
    );
  });
  it('should render 1 LI', () => {
    expect(renderedComponent.find(LI).length).toEqual(1);
  });
  it('should render 1 QuestionWrapper', () => {
    expect(renderedComponent.find(QuestionWrapper).length).toEqual(1);
  });
  it('should render 1 DetailsWrapper', () => {
    expect(renderedComponent.find(DetailsWrapper).length).toEqual(1);
  });
  it('should not render 1 Icon', () => {
    expect(renderedComponent.find(Icon).length).toEqual(0);
  });
  it('should render 1 Icon', () => {
    props = Object.assign(...props, {
      poll: fromJS({
        createdBy: 'test',
        url: 'test',
        question: 'test',
      }),
      voted: fromJS(['test', 'test2']),
    });
    renderedComponent = shallow(
      <HomePagePollListItem {...props} />
    );
    expect(renderedComponent.find(Icon).length).toEqual(1);
  });
});
