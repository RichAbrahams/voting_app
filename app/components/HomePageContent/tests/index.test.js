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
  });
  it('should render <HomePagePolls> & <HomePagePager> when polls exist', () => {
    renderedComponent = shallow(<HomePageContent {...props} />);
    expect(renderedComponent.contains(
      <Wrapper>
        <PageTitle text="Latest Polls" />
        <HomePagePolls
          polls={props.polls}
          voted={props.voted}
          viewPoll={props.viewPoll}
          viewResult={props.viewResult}
        />
        <HomePagePager
          pollCount={props.pollCount}
          loadNextPolls={props.loadNextPolls}
          loadPreviousPolls={props.loadPreviousPolls}
          currentPage={props.currentPage}
        />
      </Wrapper>
)).toEqual(true);
  });
  it('should render <LoadError> when loadingError is true ', () => {
    props = Object.assign(...props, { loadingError: true });
    renderedComponent = shallow(<HomePageContent {...props} />);
    expect(renderedComponent.contains(
      <Wrapper>
        <PageTitle text="Latest Polls" />
        <LoadError
          reload={props.loadPolls}
          text="failed to load data"
        />
      </Wrapper>
  )).toEqual(true);
  });
});
