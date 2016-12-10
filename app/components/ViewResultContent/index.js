/**
*
* ViewResultContent
*
*/
/* eslint no-unused-vars:0 */
import React from 'react';
import PageTitle from '../PageTitle';
import Wrapper from '../InnerWrapper';
import LoadError from '../LoadError';
import ResultsChart from '../ResultsChart';

function ViewResultContent(props) {
  const { pollResultError, createdBy, question, options, url, totalVotes, loadPollResult } = props;
  const text = 'failed to load data';
  return (
    <Wrapper>
      <PageTitle text="Poll Results" />
      {pollResultError && <LoadError
        text={text}
        reload={loadPollResult}
        target={url}
      />}
      {!pollResultError && <ResultsChart
        createdBy={createdBy}
        question={question}
        options={options}
        totalVotes={totalVotes}
      />}
    </Wrapper>
  );
}

ViewResultContent.propTypes = {
  loadPollResult: React.PropTypes.bool,
  pollResultError: React.PropTypes.bool,
  createdBy: React.PropTypes.string,
  question: React.PropTypes.string,
  options: React.PropTypes.object,
  totalVotes: React.PropTypes.number,
  url: React.PropTypes.string,
};

export default ViewResultContent;
