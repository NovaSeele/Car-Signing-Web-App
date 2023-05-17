import React, { useEffect } from "react";
import "./FormType.css";

import { BrowserRouter as Route, Link, Routes } from "react-router-dom";

export const ForgotPassword = () => {
  // Define the function to handle focus event
  const handleFocus = (event) => {
    let parent = event.target.parentNode.parentNode;
    parent.classList.add("focus");
  };

  // Define the function to handle blur event
  const handleBlur = (event) => {
    let parent = event.target.parentNode.parentNode;
    if (event.target.value === "") {
      parent.classList.remove("focus");
    }
  };

  // Attach focus and blur event listeners to inputs when the component mounts
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    });

    // Detach the event listeners when the component unmounts
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  return (
    <div className="ForgotPassword">
      <div className="img">{/* Put image link here */}</div>
      <div className="login-content">
        <form>
          {/* Icon Image here */}
          <h2 className="title">Welcome</h2>
          {/*User Name*/}
          <div className="input-div">
            <div className="i">
              <i className="ri-user-fill" />
            </div>
            <div className="div">
              <h5>Username</h5>
              <input type="text" className="input" required />
            </div>
          </div>
          {/*OTP*/}
          <div className="input-div">
            <div className="i">
              <i className="ri-lock-fill" />
            </div>
            <div className="div">
              <h5>OTP</h5>
              <input type="text" className="input" required />
            </div>
          </div>
          {/*New Password*/}
          <div className="input-div">
            <div className="i">
              <i className="ri-lock-fill" />
            </div>
            <div className="div">
              <h5>New Password</h5>
              <input type="password" className="input" required />
            </div>
          </div>
          {/*Confirm Password*/}
          <div className="input-div">
            <div className="i">
              <i className="ri-lock-fill" />
            </div>
            <div className="div">
              <h5>Confirm Password</h5>
              <input type="password" className="input" required />
            </div>
          </div>
          {/*Reset Password*/}
          <button className="btn">
            <Link to="/home" className="button-text">
              Reset Password
            </Link>
          </button>
          
          {/*Cancel*/}
          <button className="cancel-btn">
            <Link to="/login" className="button-text">
              Cancel
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};
