/**
*
* ViewPollVoteSaved
*
*/

import React from 'react';
import RetryButton from './RetryButton';
import Icon from './Icon';
import Wrapper from './Wrapper';

function ViewPollVoteSaved(props) {
  const { loadResultPage, url } = props;
  return (
    <Wrapper>
      <Icon
        className="icon"
        name="smile-o"
        size="2x"
      />
      Thanks for voting!
      <RetryButton onClick={() => loadResultPage(url)}>View Results</RetryButton>
    </Wrapper>
  );
}

ViewPollVoteSaved.propTypes = {
  url: React.PropTypes.string,
  loadResultPage: React.PropTypes.func,
};

export default ViewPollVoteSaved;
