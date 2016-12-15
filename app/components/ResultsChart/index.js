/**
*
* ResultsChart
*
*/

import React from 'react';
import ChartCanvas from './ChartCanvas';
import ChartTitle from './ChartTitle';
import ChartWrapper from './ChartWrapper';

function ResultsChart(props) {
  const { createdBy, question, options } = props;
  return (
    <ChartWrapper className="chartWrapper">
      <ChartTitle
        createdBy={createdBy}
        question={question}
      />
      <ChartCanvas
        options={options}
      />
    </ChartWrapper>
  );
}

ResultsChart.propTypes = {
  createdBy: React.PropTypes.string,
  question: React.PropTypes.string,
  options: React.PropTypes.object,
};

export default ResultsChart;
