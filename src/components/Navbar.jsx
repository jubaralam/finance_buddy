import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navLists } from "../data";
import Button from "../components/Button";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-between max-w navbar">
      <div className="logo">
        <h2>Fin Buddy</h2>
      </div>

      <div className="login-logout btn btn-container">
        <Button text="login" action={handleLogin} />
      </div>
    </div>
  );
};

export default Navbar;
