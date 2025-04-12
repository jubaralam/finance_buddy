import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const NetAnnualSavings = ({ amount }) => {
  const data = {
    labels: ['Savings', 'Remaining'],
    datasets: [
      {
        label: 'Annual Savings',
        data: [amount, 1000000 - amount],
        backgroundColor: ['#36A2EB', '#E0E0E0'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Net Annual Savings',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default NetAnnualSavings;

