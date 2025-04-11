import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import { resetUserData, setUserData } from "../contexts/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { formInputData } from "../data";
import RadioButton from "../components/RadioButton";
import RepeatableGroup from "../components/RepeatableGroup";
import SelectDropdown from "../components/SelectDropdown";

const UserDetailsForm = () => {
    
  console.log("Base URL:", import.meta.env.VITE_BASE_URL);
  const dispatch = useDispatch();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState("");
  const [leading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const handleUpdateDetails = async (e) => {
    e.preventDefault();
    console.log("form data", formData);
    try {
      const res = await axios.post(`${baseURL}/api/user/register`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log(res.data);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className=" flex justify-center items-center h-screen w-full bg-color">
      <form className="signup-form font-color  ">
        {formInputData.map((item) => {
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
          } else if (item.type === "repeatable") {
            return (
              <RepeatableGroup
                fields={item.fields}
                formData={formData}
                setFormData={setFormData}
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
                {...item}
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

        {/* <RadioButton
          options={["name", "name2", "name3"]}
          formData={formData}
          setFormData={setFormData}
        /> */}
        <Button text="Update Details" action={handleUpdateDetails} />
      </form>
    </div>
  );
};

export default UserDetailsForm;
