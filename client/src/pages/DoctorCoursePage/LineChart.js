import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Number of Happy',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: '#45d382',
      borderColor: '#45d382',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'Number of Sad',
      data: [1, 19, 1, 1, 2, 2],
      fill: false,
      backgroundColor: '#d40000',
      borderColor: '#d40000',
      yAxisID: 'y-axis-2',
    },
    {
        label: 'Number of Neutral',
        data: [20, 15, 7, 40, 2, 1],
        fill: false,
        backgroundColor: '#4e8fda',
        borderColor: '#4e8fda',
        yAxisID: 'y-axis-3',
      },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

const MultiAxisLine = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default MultiAxisLine;