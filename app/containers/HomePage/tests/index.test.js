/* eslint no-unused-vars:0 */

import { HomePage } from '../index';
import LoadingIndicator from 'components/LoadingIndicator';
import SectionWrapper from 'components/SectionWrapper';
import HomePageContent from 'components/HomePageContent';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<HomePage />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      loading: false,
      loadingError: false,
      polls: {},
      pollCount: 15,
      loadPolls: () => {},
      loadNextPolls: () => {},
      loadPreviousPolls: () => {},
      currentPage: 1,
      voted: {},
      viewPoll: () => {},
      viewResult: () => {},
    };
    renderedComponent = shallow(<HomePage {...props} />);
  });
  it('should render a SectionWrapper', () => {
    expect(renderedComponent.find(SectionWrapper).length).toEqual(1);
  });
  it('should render a HomePageContent', () => {
    expect(renderedComponent.find(HomePageContent).length).toEqual(1);
  });
  it('should not render a LoadingIndicator', () => {
    expect(renderedComponent.find(LoadingIndicator).length).toEqual(0);
  });
  it('should render a LoadingIndicator', () => {
    props = Object.assign(...props, { loading: true });
    renderedComponent = shallow(<HomePage {...props} />);
    expect(renderedComponent.find(LoadingIndicator).length).toEqual(1);
  });
});
