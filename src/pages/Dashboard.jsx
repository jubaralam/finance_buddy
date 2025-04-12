import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import MonthlySavingsChart from "../components/MonthlySavingsChart";
import { financialProjectionData } from "../data";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ProjectionChart from "../components/ProjectionChart";

import { useNavigate } from "react-router-dom";
import { AnnualFinancialOverviewChart } from "../components/AnnualFinancialOverviewChart";
const Dashboard = () => {
  const [stats, setStats] = useState({});
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("stats");
    alert("You have logged out");
    navigate("/login");
  };

  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  console.log("token from local storage", token);
  const fetchProjectionDetails = async () => {
    console.log(
      `${import.meta.env.VITE_BASE_URL}/api/finance/projection/${user._id}`
    );
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/finance/projection/${user._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response", res.data);
      setStats(res.data);

      localStorage.setItem("stats", JSON.stringify(res.data));
    } catch (error) {
      toast(
        error.message ||
          "something went wrong while fetching data. Please try again!"
      );
    }
  };

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    const userFromStorage = JSON.parse(localStorage.getItem("user"));
    setToken(tokenFromStorage);
    setUser(userFromStorage);
  }, []);

  useEffect(() => {
    if (token && user?._id) {
      fetchProjectionDetails();
    }
  }, [token, user]);

  const navigate = useNavigate();
  const handleRedirectToAddDetails = () => {
    navigate("/user-details");
  };
  return (
    <div className="w-full bg-color h-screen">
      <ToastContainer />
      <div className="btn btn-container">
        <Button text="Logout" action={handleLogout} />
        <Button text="Add details" action={handleRedirectToAddDetails} />
      </div>
      <div className="chart-container">
        <ProjectionChart data={stats?.projection || []} />

        <MonthlySavingsChart projection={stats?.projection || []} />

        <AnnualFinancialOverviewChart data={financialProjectionData} />
      </div>
    </div>
  );
};

export default Dashboard;
