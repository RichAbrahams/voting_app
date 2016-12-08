/**
*
* ViewPollList
*
*/

import React from 'react';
import UL from './UL';
import ViewPollListItem from '../ViewPollListItem';

function ViewPollList(props) {
  const { options, id, url, saveVote } = props;
  return (
    <UL>
      {options.map((item, index) => <ViewPollListItem
        key={index}
        id={id}
        url={url}
        option={item.get('opt')}
        saveVote={saveVote}
      />)}
    </UL>
  );
}

ViewPollList.propTypes = {
  options: React.PropTypes.object,
  id: React.PropTypes.string,
  url: React.PropTypes.string,
  saveVote: React.PropTypes.func,
};

export default ViewPollList;
