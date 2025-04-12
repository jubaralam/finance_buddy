import React from "react";
// import tringle from "../assets/tringal.png"
const ProjectionCard = ({ icon, heading, text }) => {
  return (
    <div className="card-container">
      <div className="img-container">
        {/* <img src={tringle} alt="icon" /> */}
        <h2>{icon}</h2>
        </div>
      <div>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProjectionCard;
