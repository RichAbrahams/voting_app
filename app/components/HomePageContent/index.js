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
  const { loadingError, polls, loadNextPolls, loadPreviousPolls } = props;
  return (
    <Wrapper>
      <PageTitle text="Latest Polls" />
      {loadingError && <HomePageError />}
      {polls && <HomePagePolls polls={polls} /> }
      {polls && <HomePagePager
        loadNextPolls={loadNextPolls}
        loadPreviousPolls={loadPreviousPolls}
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
};

export default HomePageContent;
