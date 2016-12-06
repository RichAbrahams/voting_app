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
  });
  it('should render <HomePageContent> when loading is false', () => {
    renderedComponent = shallow(<HomePage {...props} />);
    expect(renderedComponent.contains(
      <SectionWrapper>
        <HomePageContent
          {... props}
        />
      </SectionWrapper>)).toEqual(true);
  });
  it('should render <LoadingIndicator> when loading is true', () => {
    props = Object.assign(...props, { loading: true });
    renderedComponent = shallow(<HomePage {...props} />);
    expect(renderedComponent.contains(
      <SectionWrapper>
        <LoadingIndicator />
      </SectionWrapper>)).toEqual(true);
  });
});
