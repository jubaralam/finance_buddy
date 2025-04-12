
// components/YearlyProjection.jsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const YearlyProjection = ({ dataPoints }) => {
  const labels = dataPoints.map((item) => item.year);

  const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: dataPoints.map((item) => item.income),
        backgroundColor: '#42A5F5',
      },
      {
        label: 'Savings',
        data: dataPoints.map((item) => item.savings),
        backgroundColor: '#66BB6A',
      },
      {
        label: 'Balance',
        data: dataPoints.map((item) => item.balance),
        backgroundColor: '#FFA726',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Yearly Income, Savings & Balance',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default YearlyProjection;
