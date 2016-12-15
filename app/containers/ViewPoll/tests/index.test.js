import { ViewPoll } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import SectionWrapper from 'components/SectionWrapper';
import ViewPollContent from 'components/ViewPollContent';

describe('<ViewPoll />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      loadPoll: () => {},
      finishedLoading: true,
      params: {},
      slug: 'test',
      loadPollError: false,
      createdBy: 'test',
      question: 'test',
      options: {},
      id: 'test',
      saveVote: () => {},
      voteSaved: false,
      loadResultPage: () => {},
      resetComponent: () => {},
      changePage: () => {},
      username: 'test',
    };
    renderedComponent = shallow(
      <ViewPoll {... props} />
    );
  });
  it('should render a SectionWrapper', () => {
    expect(renderedComponent.find(SectionWrapper).length).toEqual(1);
  });
  it('should render a ViewPollContent', () => {
    expect(renderedComponent.find(ViewPollContent).length).toEqual(1);
  });
  it('should not a ViewPollContent', () => {
    props = Object.assign(...props, { finishedLoading: false });
    renderedComponent = shallow(<ViewPoll {... props} />);
    expect(renderedComponent.find(ViewPollContent).length).toEqual(0);
  });
});
