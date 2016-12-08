/**
*
* ViewPollOptions
*
*/

import React from 'react';
import Title from './Title';
import ViewPollList from '../ViewPollList';

function ViewPollOptions(props) {
  const { createdBy, question, options, id, url, saveVote } = props;

  return (
    <div>
      <Title
        createdBy={createdBy}
        question={question}
      />
      <ViewPollList
        options={options}
        id={id}
        url={url}
        saveVote={saveVote}
      />
    </div>
  );
}

ViewPollOptions.propTypes = {
  createdBy: React.PropTypes.string,
  question: React.PropTypes.string,
  options: React.PropTypes.object,
  id: React.PropTypes.string,
  url: React.PropTypes.string,
  saveVote: React.PropTypes.func,
};

export default ViewPollOptions;
