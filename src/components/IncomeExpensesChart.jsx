import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const IncomeExpensesChart = ({ finance = {} }) => {
  const {
    monthlyIncome = 0,
    monthlyFixedExpenses = 0,
    monthlySavings = 0,
  } = finance;

  const labels = ["Monthly Overview"];
  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: [monthlyIncome],
        backgroundColor: "#4ade80", // green
      },
      {
        label: "Expenses",
        data: [monthlyFixedExpenses],
        backgroundColor: "#f87171", // red
      },
      {
        label: "Savings",
        data: [monthlySavings],
        backgroundColor: "#60a5fa", // blue
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Income vs Expenses vs Savings",
        font: {
          size: 18,
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `₹${value.toLocaleString()}`,
        },
        grid: {
          color: "#535c91", // Use your .sec-bg color
        },
   
        // ticks: {
        //   callback: function (value) {
        //     return "₹" + value.toLocaleString();
        //   },
        // },
      },
      x: {
        grid: {
          color: "#535c91", // Use your .sec-bg color
        },
      },
    },
  };

  return (
    <div className=" chart">
      <Bar options={options} data={data} />
    </div>
  );
};

export default IncomeExpensesChart;
