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

function ViewResultContent(props) {
  const { pollResultError, createdBy, question, options, url, loadPollResult } = props;
  const text = 'failed to load data';
  return (
    <Wrapper>
      <PageTitle text="Poll Results" />
      {pollResultError && <LoadError
        text={text}
        reload={loadPollResult}
        target={url}
      />}
    </Wrapper>
  );
}

ViewResultContent.propTypes = {
  loadPollResult: React.PropTypes.func,
  pollResultError: React.PropTypes.bool,
  createdBy: React.PropTypes.string,
  question: React.PropTypes.string,
  options: React.PropTypes.object,
  url: React.PropTypes.string,
};

export default ViewResultContent;
