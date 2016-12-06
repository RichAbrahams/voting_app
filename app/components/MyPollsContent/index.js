/**
*
* MyPollsContent
*
*/

import React from 'react';
import PageTitle from '../PageTitle';
import Wrapper from '../InnerWrapper';
import LoadError from '../LoadError';
import MyPollsList from '../MyPollsList';

function MyPollsContent(props) {
  const { myPollsError, loadMyPolls, myPolls, viewPoll,
deletePoll } = props;
  const text = 'failed to load data';
  return (
    <Wrapper>
      <PageTitle text="My Polls" />
      {myPollsError && <LoadError
        text={text}
        reload={loadMyPolls}
        target="/mypolls"
      />}
      {!myPollsError && <MyPollsList
        myPolls={myPolls}
        viewPoll={viewPoll}
        deletePoll={deletePoll}
      />}
    </Wrapper>
  );
}

MyPollsContent.propTypes = {
  loadMyPolls: React.PropTypes.func,
  myPollsError: React.PropTypes.bool,
  myPolls: React.PropTypes.object,
  viewPoll: React.PropTypes.func,
  deletePoll: React.PropTypes.func,
};

export default MyPollsContent;
