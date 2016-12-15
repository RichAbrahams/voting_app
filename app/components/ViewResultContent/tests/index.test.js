import ViewResultContent from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import PageTitle from '../../PageTitle';
import Wrapper from '../../InnerWrapper';
import LoadError from '../../LoadError';
import ResultsChart from '../../ResultsChart';

describe('<ViewResultContent />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      loadPollResult: () => {},
      pollResultError: false,
      createdBy: 'string',
      question: 'string',
      options: {},
      totalVotes: 5,
      url: 'string',
    };
    renderedComponent = shallow(
      <ViewResultContent {...props} />
    );
  });
  it('should render 1 Wrapper', () => {
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
  it('should render 1 PageTitle', () => {
    expect(renderedComponent.find(PageTitle).length).toEqual(1);
  });
  it('should render 1 ResultsChart', () => {
    expect(renderedComponent.find(ResultsChart).length).toEqual(1);
  });
  it('should not render LoadError', () => {
    expect(renderedComponent.find(LoadError).length).toEqual(0);
  });
  it('should render 1 LoadError', () => {
    props = Object.assign(...props, { pollResultError: true });
    renderedComponent = shallow(
      <ViewResultContent {...props} />
    );
    expect(renderedComponent.find(LoadError).length).toEqual(1);
  });
});
