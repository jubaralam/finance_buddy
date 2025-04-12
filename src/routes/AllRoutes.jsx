import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import UserDetailsForm from "../pages/UserDetailsForm";
import Dashboard from "../pages/Dashboard";
import PrivateRoutes from "./ProvateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route
        path="/user/dashboard"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/user-details"
        element={
          <PrivateRoutes>
            <UserDetailsForm />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
