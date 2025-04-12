import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { setUserData } from "../contexts/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("form data", formData);
    try {
      const res = await fetch(`${baseURL}/api/auth/login`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        console.log("logged in",data.user, data.token)
        alert(data.message || "Login successful!");
        dispatch(setUserData(data.token));
        navigate("/user/dashboard");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setLoading(false);
        setFormData({ email: "", password: "" });
      } else {
        setLoading(false);
        alert(data.error || "Something went wrong.");
      }
    
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen w-full bg-color">
      <form className="signup-form font-color  ">
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

        <Button text="Login" action={handleLogin} loading={loading}/>

        <Link className="font-color redirect-to-login" to="/signup">
          I don't have an Accound! SingUp
        </Link>
      </form>
    </div>
  );
};

export default Login;
