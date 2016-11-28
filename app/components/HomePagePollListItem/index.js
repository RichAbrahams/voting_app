/**
*
* HomePagePollListItem
*
*/

import React from 'react';
import LI from './LI';
import QuestionWrapper from './QuestionWrapper';
import DetailsWrapper from './DetailsWrapper';


function HomePagePollListItem(props) {
  const { poll } = props;
  return (
    <LI>
      <QuestionWrapper>{poll.get('question')}</QuestionWrapper>
      <DetailsWrapper>
        created by {poll.get('createdBy')}
      </DetailsWrapper>
    </LI>
  );
}

HomePagePollListItem.propTypes = {
  poll: React.PropTypes.object,
};

export default HomePagePollListItem;
