
import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Legend, Tooltip } from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Legend,
  Tooltip
);

export const AnnualFinancialOverviewChart = ({ data }) => {
  const years = data.yearlyProjection.map((entry) => entry.year);
  const incomeData = data.yearlyProjection.map((entry) => entry.income);
  const savingsData = data.yearlyProjection.map((entry) => entry.savings);
  const balanceData = data.yearlyProjection.map((entry) => entry.balance);

  const chartData = {
    labels: years,
    datasets: [
      {
        type: "bar",
        label: "Income",
        data: incomeData,
        backgroundColor: "#535c91",
      },
      {
        type: "bar",
        label: "Savings",
        data: savingsData,
        backgroundColor: "#9290c3",
      },
      {
        type: "line",
        label: "Balance",
        data: balanceData,
        borderColor: "#1b1a55",
        backgroundColor: "#1b1a55",
        tension: 0.3,
        fill: false,
        pointBackgroundColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#9290c3", // font-color
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return "₹" + context.raw.toLocaleString();
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "#535c91", // sec-bg
        },
        ticks: {
          color: "#9290c3", // font-color
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#535c91",
        },
        ticks: {
          color: "#9290c3",
          callback: function (value) {
            return "₹" + value.toLocaleString();
          },
        },
      },
    },
  };

  return <div className="chart"><Chart type="bar" data={chartData} options={options} /></div>
};
