import HomePagePollListItem from '../index';
import QuestionWrapper from '../QuestionWrapper';
import DetailsWrapper from '../DetailsWrapper';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { fromJS } from 'immutable';

describe('<HomePagePollListItem />', () => {
  let renderedComponent;
  let props;
  beforeEach(() => {
    props = ({
      poll: fromJS({
        question: 'test',
        createdBy: 'test',
      }),
    });
    renderedComponent = shallow(
      <HomePagePollListItem {...props} />
    );
  });
  it('should render a li', () => {
    expect(renderedComponent.find('li')).toExist();
  });
  it('should render QuestionWrapper', () => {
    expect(renderedComponent.find(QuestionWrapper)).toExist();
  });
  it('should render DetailsWrapper', () => {
    expect(renderedComponent.find(DetailsWrapper)).toExist();
  });
});
