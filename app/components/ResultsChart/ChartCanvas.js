/* eslint consistent-return:0 */
/* eslint no-undef:0 */

import React from 'react';
import { Bar } from 'react-chartjs-2';

function ChartCanvas(props) {
  Chart.defaults.global.legend.display = false;
  Chart.defaults.global.tooltips.enabled = true;
  const { options } = props;
  const labels = (options.map((item) => item.get('opt'))).toJS();
  const data = (options.map((item) => item.get('votes'))).toJS();
  const chartData = {
    labels,
    datasets: [
      {
        backgroundColor: '#55418d',
        borderColor: '#55418d',
        borderWidth: 1,
        data,
      },
    ],
  };
  const chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#000',
          userCallback: (label) => {
            if (Math.floor(label) === label) {
              return label;
            }
          },
        },
        gridLines: {
          display: false,
        },
      }],
      xAxes: [{ gridLines: {
        display: false,
      },
        ticks: {
          fontColor: '#000',
        },
      }],
    },
    maintainAspectRatio: false,
  };
  return (
    <div>
      <Bar
        data={chartData}
        options={chartOptions}
        width={250}
        height={350}
      />
    </div>
  );
}

ChartCanvas.propTypes = {
  options: React.PropTypes.object,
};

export default ChartCanvas;
