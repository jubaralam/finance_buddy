// // components/RepeatableGroup.jsx
// import React from "react";
// import Input from "./Input";
// import RadioButton from "./RadioButton";
// import SelectDropdown from "./SelectDropdown";

// const RepeatableGroup = ({ fields, formData, setFormData }) => {
//   const handleChange = (index, fieldName, value) => {
//     const updatedGoals = [...formData.financialGoals];
//     updatedGoals[index] = {
//       ...updatedGoals[index],
//       [fieldName]: value,
//     };

//     setFormData({
//       ...formData,
//       financialGoals: updatedGoals,
//     });
//   };
//   return (
//     <div className="border p-4 mb-4 rounded-md">
//       {fields.map((item) => {
//         if (item.type === "radio") {
//           return (
//             <RadioButton
//               key={item.name}
//               label={item.label}
//               name={item.name}
//               required={item.required}
//               formData={formData}
//               setFormData={setFormData}
//               options={item.options}
//             />
//           );
//         } else if (item.type === "option") {
//           return (
//             <SelectDropdown
//               key={item.name}
//               label={item.label}
//               name={item.name}
//               required={item.required}
//               formData={formData}
//               setFormData={setFormData}
//               options={item.options}
//             />
//           );
//         } else {
//           return (
//             <Input
//               key={item.name}
//               text={item.label}
//               type={item.type}
//               placeholder={item.label}
//               name={item.name}
//               formData={formData}
//               setFormData={setFormData}
//             />
//           );
//         }
//       })}
//     </div>
//   );
// };

// export default RepeatableGroup;


import React from "react";

const RepeatableGroup = ({ fields, formData, setFormData }) => {
  const handleChange = (index, fieldName, value) => {
    const updatedGoals = [...formData.financialGoals];
    updatedGoals[index] = {
      ...updatedGoals[index],
      [fieldName]: value,
    };

    setFormData({
      ...formData,
      financialGoals: updatedGoals,
    });
  };

  const handleAdd = () => {
    setFormData({
      ...formData,
      financialGoals: [
        ...formData.financialGoals,
        fields.reduce((acc, curr) => {
          acc[curr.name] = "";
          return acc;
        }, {}),
      ],
    });
  };

  const handleRemove = (index) => {
    const updatedGoals = [...formData.financialGoals];
    updatedGoals.splice(index, 1);
    setFormData({
      ...formData,
      financialGoals: updatedGoals,
    });
  };

  return (
    <div className="mb-4">
      <label className="block font-bold text-lg mb-2">Financial Goals</label>

      {formData.financialGoals.map((goal, index) => (
        <div
          key={index}
          className="mb-4 border p-4 rounded-md shadow bg-white relative"
        >
          {fields.map((field) => (
            <div key={field.name} className="mb-2">
              <label className="block text-sm font-semibold mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={goal[field.name]}
                required={field.required}
                onChange={(e) =>
                  handleChange(index, field.name, e.target.value)
                }
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          ))}

          {formData.financialGoals.length > 1 && (
            <button
              type="button"
              className="text-red-500 text-sm mt-2"
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        onClick={handleAdd}
      >
        Add Goal
      </button>
    </div>
  );
};

export default RepeatableGroup;
