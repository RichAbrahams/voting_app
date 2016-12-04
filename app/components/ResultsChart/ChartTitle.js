/**
*
* ResultsChart
*
*/

import React from 'react';
import TitleWrapper from './TitleWrapper';

function ResultsChart(props) {
  const { createdBy, question } = props;
  return (
    <TitleWrapper>
      <h2>{question}</h2>
      <h3>Created by {createdBy}</h3>
    </TitleWrapper>
  );
}

ResultsChart.propTypes = {
  createdBy: React.PropTypes.string,
  question: React.PropTypes.string,
};

export default ResultsChart;
