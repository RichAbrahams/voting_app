import ResultsChart from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { fromJS } from 'immutable';
import ChartCanvas from '../ChartCanvas';
import ChartTitle from '../ChartTitle';
import ChartWrapper from '../ChartWrapper';

describe('<ResultsChart />', () => {
  let renderedComponent;
  let props;
  beforeEach(() => {
    props = {
      createdBy: 'testUser',
      question: 'testQuestion',
      options: fromJS([{ votes: 10, opt: 'test' }, { votes: 10, opt: 'another test' }]),
    };
    renderedComponent = shallow(
      <ResultsChart {... props} />
    );
  });
  it('should render a ChartWrapper', () => {
    expect(renderedComponent.find(ChartWrapper).length).toEqual(1);
  });
  it('should render a ChartTitle', () => {
    expect(renderedComponent.find(ChartTitle).length).toEqual(1);
  });
  it('should render a ChartCanvas', () => {
    expect(renderedComponent.find(ChartCanvas).length).toEqual(1);
  });
});
