import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";

import { formInputData } from "../data";
import RadioButton from "../components/RadioButton";
import RepeatableGroup from "../components/RepeatableGroup";
import SelectDropdown from "../components/SelectDropdown";
import LoadingSpinner from "../components/LoadingSpinner";

const UserDetailsForm = () => {
  console.log("Base URL:", import.meta.env.VITE_BASE_URL);
  const [token, setToken] = useState("");
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: 0,
    monthlyIncome: 0,
    monthlyFixedExpenses: 0,
    monthlySavings: 0,
    currentSavings: 0,
    incomeGrowthRate: 0,
    careerChange: "Yes",
    newExpectedIncome: 0,
    changeYear: 0,
    financialGoals: [
      {
        goal: "",
        amount: 0,
        targetYear: 0,
      },
    ],
  });

  const handleUpdateDetails = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/finance/input`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.setItem("user",JSON.stringify(res.data));
      console.log(res.data);
      setLoading(false);
      navigate("/user/dashboard");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  }, []);
  console.log(token);

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
                key={item.name}
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
        <Button
          text="Update Details"
          action={handleUpdateDetails}
          loading={loading}
        />
      </form>
    </div>
  );
};

export default UserDetailsForm;
