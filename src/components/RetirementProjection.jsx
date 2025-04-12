
// components/RetirementProjection.jsx
import React from 'react';

const RetirementProjection = ({ retirement }) => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-lg font-bold mb-2">Retirement Projection</h2>
      <ul className="text-sm space-y-1">
        <li><strong>Current Age:</strong> {retirement.ageNow}</li>
        <li><strong>Retirement Age:</strong> {retirement.ageAtRetirement}</li>
        <li><strong>Expected Savings by Retirement:</strong> ₹{retirement.expectedSavings}</li>
        <li><strong>Post-Retirement Monthly Income:</strong> ₹{retirement.monthlyPostRetirementIncome}</li>
      </ul>
    </div>
  );
};

export default RetirementProjection;
