import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarController
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarController
);

const MonthlySavingsChart = ({ projection = [] }) => {
  // Defensive handling in case projection is not passed
  const labels = projection.map((item) => `Year ${item.year}`);
  const dataPoints = projection.map((item) => Math.round(item.balance / 12));

  const data = {
    labels,
    datasets: [
      {
        label: "Avg Monthly Balance",
        data: dataPoints,
        fill: false,
        borderColor: "#10b981",
        backgroundColor: "#10b981",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Monthly Savings Trend (Based on Yearly Balance)",
      },
    },
    scales: {
      y: {
        grid: {
          color: "#535c91", // Use your .sec-bg color
        },
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "₹" + value.toLocaleString();
          },
        },
      },
      x: {
        grid: {
          color: "#535c91", // Use your .sec-bg color
        },
      },
    },
  };

  return (
    <div className="chart">
      <Line options={options} data={data} />
    </div>
  );
};

export default MonthlySavingsChart;
