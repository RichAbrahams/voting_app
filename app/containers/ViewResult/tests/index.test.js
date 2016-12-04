import { ViewResult } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

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
  it('should render a <SectionWrapper>', () => {
    expect(renderedComponent.find('SectionWrapper')).toExist();
  });
});
