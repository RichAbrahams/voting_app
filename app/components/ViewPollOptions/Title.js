/**
*
* ResultsChart
*
*/

import React from 'react';
import TitleWrapper from './TitleWrapper';

function ViewPollOptionsTitle(props) {
  const { createdBy, question } = props;
  return (
    <TitleWrapper>
      <h2>{question}</h2>
      <h4>Created by {createdBy}</h4>
    </TitleWrapper>
  );
}

ViewPollOptionsTitle.propTypes = {
  createdBy: React.PropTypes.string,
  question: React.PropTypes.string,
};

export default ViewPollOptionsTitle;
