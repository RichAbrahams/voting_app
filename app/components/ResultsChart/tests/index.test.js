import ResultsChart from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ResultsChart />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      createdBy: 'test',
      question: 'test',
      options: { test: 'test' },
    };
    renderedComponent = shallow(
      <ResultsChart {...props} />
    );
  });
  it('should render a div', () => {
    expect(renderedComponent.find('div')).toExist();
  });
  it('should render a ChartTitle', () => {
    expect(renderedComponent.find('ChartTitle')).toExist();
  });
  it('should render a ChartCanvas', () => {
    expect(renderedComponent.find('ChartCanvas')).toExist();
  });
});
