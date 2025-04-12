// components/FinanceGoalsStatus.jsx
import React from 'react';

const FinanceGoalsStatus = ({ goals }) => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-lg font-bold mb-2">Financial Goals Status</h2>
      <table className="w-full text-sm border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Goal</th>
            <th className="border p-2">Target Year</th>
            <th className="border p-2">Amount Needed</th>
            <th className="border p-2">Expected Balance</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {goals.map((goal, idx) => (
            <tr key={idx} className="text-center">
              <td className="border p-2">{goal.goal}</td>
              <td className="border p-2">{goal.targetYear}</td>
              <td className="border p-2">₹{goal.amountNeeded}</td>
              <td className="border p-2">₹{goal.expectedBalance}</td>
              <td className={`border p-2 ${goal.status === 'At Risk' ? 'text-red-600' : 'text-green-600'}`}>{goal.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinanceGoalsStatus;

