/**
*
* HomePagePolls
*
*/

import React from 'react';
import HomePagePollListItem from '../HomePagePollListItem';
import UL from './UL';

function HomePagePolls(props) {
  const { polls } = props;
  return (
    <UL>
      {polls.map((item, index) => <HomePagePollListItem
        key={index}
        poll={item}
      />)}
    </UL>
  );
}

HomePagePolls.propTypes = {
  polls: React.PropTypes.object,
};

export default HomePagePolls;
