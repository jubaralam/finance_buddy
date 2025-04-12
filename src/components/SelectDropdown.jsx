// components/SelectDropdown.jsx
import React from "react";

const SelectDropdown = ({
  label,
  name,
  required,
  options,
  formData,
  setFormData,
}) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  return (
    <div className="dropdown">
      <label htmlFor={name} className="flex flex-col">
        {label}

        <select
        key={name}
          id={name}
          name={name}
          required={required}
          onChange={handleChange}
          value={formData[name] || ""}
        >
          <option value="">{label}</option>
          {options.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectDropdown;
