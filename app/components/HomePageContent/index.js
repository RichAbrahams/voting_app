/**
*
* HomePageContent
*
*/

import React from 'react';
import PageTitle from '../PageTitle';
import Wrapper from '../SectionWrapper';
import HomePageError from '../HomePageError';
import HomePagePolls from '../HomePagePolls';
import HomePagePager from '../HomePagePager';

function HomePageContent(props) {
  const { loadingError, polls, pollCount, loadNextPolls, loadPreviousPolls, currentPage, voted, viewPoll, viewResult } = props;
  return (
    <Wrapper>
      <PageTitle text="Latest Polls" />
      {loadingError && <HomePageError />}
      {polls && <HomePagePolls
        polls={polls}
        voted={voted}
        viewPoll={viewPoll}
        viewResult={viewResult}
      /> }
      {polls && <HomePagePager
        pollCount={pollCount}
        loadNextPolls={loadNextPolls}
        loadPreviousPolls={loadPreviousPolls}
        currentPage={currentPage}
      />}
    </Wrapper>
  );
}

HomePageContent.propTypes = {
  loadingError: React.PropTypes.bool,
  loadNextPolls: React.PropTypes.func,
  loadPreviousPolls: React.PropTypes.func,
  polls: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  pollCount: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.bool,
  ]),
  currentPage: React.PropTypes.number,
  voted: React.PropTypes.object,
  viewPoll: React.PropTypes.func,
  viewResult: React.PropTypes.func,
};

export default HomePageContent;
