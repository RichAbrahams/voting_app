/**
*
* HomePagePollListItem
*
*/

import React from 'react';
import LI from './LI';
import QuestionWrapper from './QuestionWrapper';
import DetailsWrapper from './DetailsWrapper';
import Icon from './Icon';

function HomePagePollListItem(props) {
  const { poll, voted, viewPoll, viewResult } = props;
  const hasVoted = voted.includes(poll.get('url'));
  const click = voted.includes(poll.get('url')) ? viewResult : viewPoll;
  return (
    <LI onClick={() => click(poll.get('url'))}>
      <QuestionWrapper>{poll.get('question')}</QuestionWrapper>
      <DetailsWrapper>
        created by {poll.get('createdBy')}
        {hasVoted && <Icon
          name="check-circle"
          size="2x"
        />}
      </DetailsWrapper>
    </LI>
  );
}

HomePagePollListItem.propTypes = {
  poll: React.PropTypes.object,
  voted: React.PropTypes.object,
  viewPoll: React.PropTypes.func,
  viewResult: React.PropTypes.func,
};

export default HomePagePollListItem;
