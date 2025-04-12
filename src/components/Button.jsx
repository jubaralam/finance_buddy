import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const Button = ({ text, action, loading = false }) => {
  LoadingSpinner;
  return (
    <div>
      <button
        onClick={action}
        disabled={loading}
        className="b-color sec-bg hover-bg "
      >
        {loading ? <LoadingSpinner /> : text}
      </button>
    </div>
  );
};

export default Button;
