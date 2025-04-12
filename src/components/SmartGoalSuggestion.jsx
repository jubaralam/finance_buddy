import React from "react";

const SmartGoalSuggestion = () => {
  return (
    <div className="card-container-2">
      <div className="card">
        <div>
          <img
            src="https://cdn2.iconfinder.com/data/icons/family-home-color/100/Family__home_13-512.png"
            alt="home icon"
          />
        </div>
        <div>
          <h3>Homeownership</h3>
          <p>plan for your dream home with tailored savings plans.</p>
        </div>
      </div>
      <div className="card">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/9221/9221444.png"
            alt="education icon"
          />
        </div>
        <div>
          <h3>Education</h3>
          <p>Save for education expenses with optimized strategies.</p>
        </div>
      </div>
      <div className="card">
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/7508/7508060.png" />
        </div>
        <div>
          <h3>Travel</h3>
          <p>Set aside funds for vacations with flexible budgeting.</p>
        </div>
      </div>
    </div>
  );
};

export default SmartGoalSuggestion;
