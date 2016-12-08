/**
*
* ViewPollListItem
*
*/

import React from 'react';
import LI from './LI';

function ViewPollListItem(props) {
  const { option, id, url, saveVote } = props;
  return (
    <LI onClick={() => saveVote({ id, opt: option, url })}>
      {option}
    </LI>
  );
}

ViewPollListItem.propTypes = {
  option: React.PropTypes.string,
  id: React.PropTypes.string,
  url: React.PropTypes.string,
  saveVote: React.PropTypes.func,
};

export default ViewPollListItem;
