import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import { resetUserData, setUserData } from "../contexts/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const SingUp = () => {
  console.log("Base URL:", import.meta.env.VITE_BASE_URL);

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("form data", formData);
    try {
      console.log(baseURL);

      const res = await axios.post(`${baseURL}/api/auth/register`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      toast(res.data.message);
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className=" flex justify-center items-center h-screen w-full bg-color">
      <ToastContainer />
      <form className="signup-form font-color  ">
        <Input
          text="Name"
          type="text"
          placeholder="Enter your name"
          formData={formData}
          setFormData={setFormData}
          name="name"
        />

        <Input
          text="Username"
          type="text"
          placeholder="Enter your username"
          name="username"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          text="Email"
          type="email"
          placeholder="Enter your email"
          name="email"
          formData={formData}
          setFormData={setFormData}
        />

        <Input
          name="password"
          type="password"
          placeholder="Enter Your password"
          text="Password"
          formData={formData}
          setFormData={setFormData}
        />

        <Button text="Register" action={handleRegister} loading={loading} />

        <Link className="font-color redirect-to-login" to="/login">
          I have an Accound! Signin
        </Link>
      </form>
    </div>
  );
};

export default SingUp;
