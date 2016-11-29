/**
*
* HomePagePager
*
*/

import React from 'react';
import Wrapper from './Wrapper';
import PagerButton from './PagerButton';
import FontAwesome from 'react-fontawesome';

function HomePagePager(props) {
  const { pollCount, loadNextPolls, loadPreviousPolls, currentPage } = props;
  const lastPage = Math.ceil(pollCount / 25);
  const nextDisabled = currentPage === lastPage;
  const previousDisabled = currentPage === 1;
  return (
    <Wrapper>
      <PagerButton onClick={loadPreviousPolls} disabled={previousDisabled}>
        <FontAwesome
          name="arrow-circle-o-left"
          size="3x"
        />
      </PagerButton>
      {currentPage} / {lastPage}
      <PagerButton onClick={loadNextPolls} disabled={nextDisabled}>
        <FontAwesome
          className="icon"
          name="arrow-circle-o-right"
          size="3x"
        />
      </PagerButton>
    </Wrapper>
  );
}

HomePagePager.propTypes = {
  loadNextPolls: React.PropTypes.func,
  loadPreviousPolls: React.PropTypes.func,
  pollCount: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.bool,
  ]),
  currentPage: React.PropTypes.number,
};

export default HomePagePager;
