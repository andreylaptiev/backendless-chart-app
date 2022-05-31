import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
);

const Chart = (props) => {
  const options = {
    aspectRatio: 2,
    responsive: true,
  };

  const data = {
    type: props.type,
    labels: props.labels,
    datasets: [
      {
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: '#000',
        borderWidth: 1,
        data: props.data,
      }
    ]
  };

  // render different chart depending on incoming type
  // user changes type with radio button
  let chart;
  switch (props.type) {
    case 'bar':
      chart = <Bar options={options} data={data} />;
      break;
    case 'doughnut':
      chart = <Doughnut options={options} data={data} />;
      break;
    case 'line':
      chart = <Line options={options} data={data} />;
      break;
    case 'pie':
      chart = <Pie options={options} data={data} />;
      break;
    default:
      chart = <Bar options={options} data={data} />;
      break;
  }

  return (
    <>
      {chart}
    </>
  );
}

Chart.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.number)
  ]).isRequired,
  type: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Chart;
