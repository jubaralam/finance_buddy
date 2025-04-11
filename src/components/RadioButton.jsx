
import React from "react";

const RadioButton = ({
  label,
  name,
  type = "radio",
  required,
  formData,
  setFormData,
  options,
}) => {
  return (
    <fieldset className="radio-btn">
      <legend>{label}</legend>

      {options.map((option, idx) => {
        const optionId = `${name}-${idx}`;

        return (
          <div key={idx}>
            <input
              type={type}
              id={optionId}
              name={name}
              value={option}
              checked={formData[name] === option}
              onChange={(e) =>
                setFormData({ ...formData, [name]: e.target.value })
              }
              required={required}
            />
            <label htmlFor={optionId}>{option}</label>
          </div>
        );
      })}
    </fieldset>
  );
};

export default RadioButton;
