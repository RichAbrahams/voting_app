import { ViewResult } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import ViewResultContent from 'components/ViewResultContent';
import SectionWrapper from 'components/SectionWrapper';

describe('<ViewResult />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      loadPollResult: () => {},
      finishedLoading: true,
      params: { slug: 'test' },
      pollResultError: false,
      createdBy: 'test',
      question: 'test',
      options: { test: 'test' },
      totalVotes: 100,
    };
    renderedComponent = shallow(
      <ViewResult {...props} />
    );
  });
  it('should render a SectionWrapper', () => {
    expect(renderedComponent.find(SectionWrapper).length).toEqual(1);
  });
  it('should render a ViewResultContent', () => {
    expect(renderedComponent.find(ViewResultContent).length).toEqual(1);
  });
  it('should not a ViewResultContent', () => {
    props = Object.assign(...props, { finishedLoading: false });
    renderedComponent = shallow(<ViewResult {... props} />);
    expect(renderedComponent.find(ViewResultContent).length).toEqual(0);
  });
});
