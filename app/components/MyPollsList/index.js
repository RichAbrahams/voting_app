/**
*
* MyPollsList
*
*/
import React from 'react';
import UL from './UL';
import MyPollsListItem from '../MyPollsListItem';

function MyPollsList(props) {
  const { myPolls, viewPoll, deletePoll } = props;
  return (
    <UL>
      {myPolls.map((item, index) => <MyPollsListItem
        key={index}
        poll={item}
        viewPoll={viewPoll}
        deletePoll={deletePoll}
      />)}
    </UL>
  );
}

MyPollsList.propTypes = {
  myPolls: React.PropTypes.object,
  viewPoll: React.PropTypes.func,
  deletePoll: React.PropTypes.func,
};


export default MyPollsList;
