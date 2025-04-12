import React from "react";
import ProjectionCard from "./ProjectionCard";

const RealTimeProjection = () => {
  return (
    <div className="real-time-projection-container">
      <h2 className="font-color">Real Time Projection</h2>
      <ProjectionCard icon="1" heading="Connect" text="Link Your accounts for a comprenensive view."/>
      <ProjectionCard icon="2" heading="Analyze" text="Our Tool forecasts your financial trajectory."/>
      <ProjectionCard icon="3" heading="Adjust" text="Make informed decisions to reach your goals"/>

      <div className="content">
      <p className="font-color">
        See your financial future unfold in real-time. Our dynamic projections adapt as your circumstances change, providing a clear and up-to-date view of your progress.
      </p>
      </div>
    </div>
  );
};

export default RealTimeProjection;
