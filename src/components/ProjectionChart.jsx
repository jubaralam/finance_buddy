// components/ProjectionChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  BarController
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  BarController
);

// const ProjectionChart = ({ data }) => {
//   const years = data.map((item) => `Year ${item.year}`);
//   const balances = data.map((item) => item.balance);

const ProjectionChart = ({ data }) => {
  console.info("data", data);
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <p className="text-red-500">
        No projection data available. please update your details!
      </p>
    );
  }

  const years = data.map((item) => `Year ${item.year}`);
  const balances = data.map((item) => item.balance);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: "Projected Balance (₹)",
        data: balances,
        fill: false,
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  //   const options = {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: "top",
  //       },
  //     },
  //     scales: {
  //       y: {
  //         grid: {
  //             color: "grey", // light gray vertical grid lines
  //             borderColor: "#9ca3af", // y-axis border line
  //           },
  //         beginAtZero: true,
  //         ticks: {
  //           callback: function (value) {
  //             return "₹" + value.toLocaleString();
  //           },
  //         },
  //       },
  //       x: {
  //         grid: {
  //           color: "grey", // light gray horizontal grid lines
  //           borderColor: "#9ca3af", // x-axis border line
  //         },
  //         ticks: {
  //           color: "#fff", // text color on x-axis
  //         },
  //       },
  //     },
  //   };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
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
      <h2 className="font-color">Financial Projection Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ProjectionChart;
