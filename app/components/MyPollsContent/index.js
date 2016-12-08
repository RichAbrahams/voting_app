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
import NoPollsMsg from './NoPollsMsg';
import MyPollDeleteError from '../MyPollDeleteError';

function MyPollsContent(props) {
  const { myPollsError, loadMyPolls, myPolls, viewPoll,
deletePoll, setShowConfirm, showConfirm, deletePollError } = props;
  const text = 'failed to load data';
  return (
    <Wrapper>
      <PageTitle text="My Polls" />
      {myPollsError && <LoadError
        text={text}
        reload={loadMyPolls}
        target="/mypolls"
      />}
      {deletePollError && <MyPollDeleteError
        retry={deletePoll}
      />}
      {(!deletePollError && !myPollsError && !myPolls.isEmpty()) && <MyPollsList
        myPolls={myPolls}
        viewPoll={viewPoll}
        deletePoll={deletePoll}
        setShowConfirm={setShowConfirm}
        showConfirm={showConfirm}
      />}
      {(!deletePollError && !myPollsError && myPolls.isEmpty()) &&
      <NoPollsMsg>You haven&apos;t created any polls yet.</NoPollsMsg>
      }
    </Wrapper>
  );
}

MyPollsContent.propTypes = {
  loadMyPolls: React.PropTypes.func,
  myPollsError: React.PropTypes.bool,
  myPolls: React.PropTypes.object,
  viewPoll: React.PropTypes.func,
  deletePoll: React.PropTypes.func,
  setShowConfirm: React.PropTypes.func,
  showConfirm: React.PropTypes.string,
  deletePollError: React.PropTypes.bool,
};

export default MyPollsContent;
