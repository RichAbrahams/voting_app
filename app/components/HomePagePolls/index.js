/**
*
* HomePagePolls
*
*/

import React from 'react';
import HomePagePollListItem from '../HomePagePollListItem';
import UL from './HomePageUL';

function HomePagePolls(props) {
  const { polls, voted, viewPoll, viewResult } = props;
  return (
    <UL>
      {polls.map((item, index) => <HomePagePollListItem
        key={index}
        poll={item}
        voted={voted}
        viewPoll={viewPoll}
        viewResult={viewResult}
      />)}
    </UL>
  );
}

HomePagePolls.propTypes = {
  polls: React.PropTypes.object,
  voted: React.PropTypes.object,
  viewPoll: React.PropTypes.func,
  viewResult: React.PropTypes.func,
};

export default HomePagePolls;
