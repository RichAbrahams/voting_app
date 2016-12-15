import ViewPollOptions from '../index';
import Title from '../Title';
import ViewPollList from '../../ViewPollList';
import Wrapper from '../Wrapper';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ViewPollOptions />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      createdBy: 'string',
      question: 'string',
      options: {},
      id: 'string',
      url: 'string',
      saveVote: () => {},
    };
  });
  it('should render 1 Wrapper', () => {
    renderedComponent = shallow(
      <ViewPollOptions {... props} />
    );
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
  it('should render 1 Title', () => {
    renderedComponent = shallow(
      <ViewPollOptions {... props} />
    );
    expect(renderedComponent.find(Title).length).toEqual(1);
  });
  it('should render 1 ViewPollList', () => {
    renderedComponent = shallow(
      <ViewPollOptions {... props} />
    );
    expect(renderedComponent.find(ViewPollList).length).toEqual(1);
  });
});
