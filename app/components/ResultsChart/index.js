/**
*
* ResultsChart
*
*/

import React from 'react';
import ChartCanvas from './ChartCanvas';
import ChartTitle from './ChartTitle';

function ResultsChart(props) {
  const { createdBy, question, options } = props;
  return (
    <div>
      <ChartTitle
        createdBy={createdBy}
        question={question}
      />
      <ChartCanvas
        options={options}
      />
    </div>
  );
}

ResultsChart.propTypes = {
  createdBy: React.PropTypes.string,
  question: React.PropTypes.string,
  options: React.PropTypes.object,
};

export default ResultsChart;
