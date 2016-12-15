import HomePageContent from '../index';
import PageTitle from '../../PageTitle';
import Wrapper from '../../InnerWrapper';
import LoadError from '../../LoadError';
import HomePagePolls from '../../HomePagePolls';
import HomePagePager from '../../HomePagePager';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<HomePageContent />', () => {
  let props;
  let renderedComponent;
  beforeEach(() => {
    props = {
      loadingError: false,
      polls: { test: 'test' },
      pollCount: 15,
      loadPolls: () => {},
      loadNextPolls: () => {},
      loadPreviousPolls: () => {},
      currentPage: 1,
      voted: {},
      viewPoll: () => {},
      viewResult: () => {},
    };
    renderedComponent = shallow(
      <HomePageContent {...props} />
    );
  });
  it('should render 1 Wrapper', () => {
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
  it('should render 1 PageTitle', () => {
    expect(renderedComponent.find(PageTitle).length).toEqual(1);
  });
  it('should render 1 HomePagePolls', () => {
    expect(renderedComponent.find(HomePagePolls).length).toEqual(1);
  });
  it('should render 1 HomePagePager', () => {
    expect(renderedComponent.find(HomePagePager).length).toEqual(1);
  });
  it('should not render LoadError', () => {
    expect(renderedComponent.find(LoadError).length).toEqual(0);
  });
  it('should render 1 LoadError', () => {
    props = Object.assign(...props, { loadingError: true });
    renderedComponent = shallow(
      <HomePageContent {...props} />
    );
    expect(renderedComponent.find(LoadError).length).toEqual(1);
  });
});
