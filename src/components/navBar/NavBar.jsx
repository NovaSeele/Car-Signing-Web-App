import React, { useState, useEffect } from "react";
import "./NavBar.css";

import { BrowserRouter as Route, Link, Routes } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(false);

  const loggedIn = () => {
    if (localStorage.getItem("access")) {
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    localStorage.removeItem("access");
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/inspection/user/me/`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access")}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const userData = await response.json();
          console.log(userData);
          setName(userData[0].email);
        } else {
          // Handle error response
          // For example, if the token is invalid or expired
          // You can redirect to the login page or display an error message
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    if (loggedIn()) {
      fetchUserName();
    }
  }, []);

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
        <span>RegistryTotal</span>
      </div>

      <ul className="left-nav">
        <li>
          {/* Home with Logo - Link to home */}
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          {/* Table - Link to Table */}
          <Link to="/infotable">
            <span>
              Thống kê<i className="ri-bar-chart-fill"></i>
            </span>
          </Link>
        </li>
        {/* Table - Link to Table */}
        <li>
          <Link to="/formmain">
            <span>
              Khai Báo<i className="ri-survey-line"></i>
            </span>
          </Link>
        </li>
      </ul>

      <div className="right-nav">
        {!loggedIn() ? (
          <>
            <i className="ri-user-fill"></i>
            <Link to="/login">
              <span>Login</span>
            </Link>

            <Link to="/signup">
              <span>SignUp</span>
            </Link>
          </>
        ) : (
          <>
            <i className="ri-user-fill"></i>
            {/* show user's name from api */}
            <span>{name}</span>
            {/* log out */}
            <Link to="#" onClick={handleLogout}>
              <span>Log out</span>
            </Link>
          </>
        )}
      </div>

      <div className="menu-icon" onClick={handleMenuClick}>
        <i className="bx bx-menu"></i>
      </div>
    </div>
  );
};
