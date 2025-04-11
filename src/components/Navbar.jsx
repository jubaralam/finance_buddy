import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLists } from "../data";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex items-center justify-between max-w">
      <div className="logo">logo</div>
      <div className="nav-lists">
        <ul>
          {navLists.map((item) => (
            <li key={item.url}>
              <Link>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="login-logout">
        {isLoggedIn ? <button>Log Out</button> : <button>Login</button>}
      </div>
    </div>
  );
};

export default Navbar;
