// components/RepeatableGroup.jsx
import React from "react";
import Input from "./Input";
import RadioButton from "./RadioButton";
import SelectDropdown from "./SelectDropdown";

const RepeatableGroup = ({ fields, formData, setFormData }) => {
  return (
    <div className="border p-4 mb-4 rounded-md">
      {fields.map((item) => {
        if (item.type === "radio") {
          return (
            <RadioButton
              key={item.name}
              label={item.label}
              name={item.name}
              required={item.required}
              formData={formData}
              setFormData={setFormData}
              options={item.options}
            />
          );
        } else if (item.type === "option") {
          return (
            <SelectDropdown
              key={item.name}
              label={item.label}
              name={item.name}
              required={item.required}
              formData={formData}
              setFormData={setFormData}
              options={item.options}
            />
          );
        } else {
          return (
            <Input
              key={item.name}
              text={item.label}
              type={item.type}
              placeholder={item.label}
              name={item.name}
              formData={formData}
              setFormData={setFormData}
            />
          );
        }
      })}
    </div>
  );
};

export default RepeatableGroup;
