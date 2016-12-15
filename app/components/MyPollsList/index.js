/**
*
* MyPollsList
*
*/
import React from 'react';
import UL from './UL';
import MyPollsListItem from '../MyPollsListItem';

function MyPollsList(props) {
  const { myPolls, viewPoll, deletePoll, setShowConfirm, showConfirm } = props;
  return (
    <UL>
      {myPolls.map((item, index) => <MyPollsListItem
        key={index}
        index={index}
        poll={item}
        viewPoll={viewPoll}
        deletePoll={deletePoll}
        setShowConfirm={setShowConfirm}
        showConfirm={showConfirm}
      />)}
    </UL>
  );
}

MyPollsList.propTypes = {
  myPolls: React.PropTypes.object,
  viewPoll: React.PropTypes.func,
  deletePoll: React.PropTypes.func,
  setShowConfirm: React.PropTypes.func,
  showConfirm: React.PropTypes.bool,
};


export default MyPollsList;
