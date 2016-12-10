/**
*
* ViewPollContent
*
*/

import React from 'react';
import PageTitle from '../PageTitle';
import Wrapper from '../InnerWrapper';
import LoadError from '../LoadError';
import ViewPollOptions from '../ViewPollOptions';
import ViewPollVoteSaved from '../ViewPollVoteSaved';

function ViewPollContent(props) {
  const { loadPollError, createdBy, question, options, url, id, loadPoll, saveVote, voteSaved,
  loadResultPage } = props;
  const text = 'failed to load data';
  return (
    <Wrapper>
      <PageTitle text="Vote" />
      {loadPollError && <LoadError
        text={text}
        reload={loadPoll}
        target={url}
      />}
      {voteSaved && <ViewPollVoteSaved
        loadResultPage={loadResultPage}
        url={url}
      />}
      {(!loadPollError && !voteSaved) && <ViewPollOptions
        createdBy={createdBy}
        question={question}
        options={options}
        saveVote={saveVote}
        id={id}
        url={url}
      />}
    </Wrapper>
  );
}

ViewPollContent.propTypes = {
  loadPoll: React.PropTypes.func,
  loadPollError: React.PropTypes.bool,
  createdBy: React.PropTypes.string,
  question: React.PropTypes.string,
  options: React.PropTypes.object,
  url: React.PropTypes.string,
  id: React.PropTypes.string,
  saveVote: React.PropTypes.func,
  voteSaved: React.PropTypes.bool,
  loadResultPage: React.PropTypes.bool,
};

export default ViewPollContent;
