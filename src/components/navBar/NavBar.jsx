import React, { useState } from "react";
import "./NavBar.css";

import { BrowserRouter as Route, Link, Routes } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    const menuIcon = document.querySelector(".menu-icon i");
    const leftNav = document.querySelector(".left-nav");
    menuIcon.classList.toggle("bx-x");
    leftNav.classList.toggle("open");
    setIsOpen(!isOpen);
  };


  return (
    <div className="navBar">
      <div className="logo">
        <i className="ri-home-3-line"></i>
        <span>App</span>
      </div>

      <ul className="left-nav">
        <li>
          {/* Home with Logo - Link to home */}
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          {/* Search - Link to userinfo */}
          <Link to="/userinfo">
            <span>User Info</span>
          </Link>
        </li>
        <li>
          {/* Search - Link to carinfo */}
          <Link to="/carinfo">
            <span>Car Info</span>
          </Link>
        </li>
        <li>
          {/* Search - Link to regCenterInfo */}
          <Link to="/registrationcenter">
            <span>RegistrationCenter</span>
          </Link>
        </li>
        <li>
          {/* Table - Link to Table */}
          <Link to="/car">
            <span>Car</span>
          </Link>
        </li>
        <li>
          {/* Search - Link to search */}
          <Link to="/carregistration">
            <span>Car Reg</span>
          </Link>
        </li>
      </ul>

      <div className="right-nav">
        {/* Login with logo - Link to login */}
        <i className="ri-user-fill"></i>
        <Link to="/login">
          <span>Login</span>
        </Link>

        {/* SignUp - Link to signup */}
        <Link to="/signup">
          <span>SignUp</span>
        </Link>
      </div>

      <div className="menu-icon" onClick={handleMenuClick}>
        <i className="bx bx-menu"></i>
      </div>
    </div>
  );
};
