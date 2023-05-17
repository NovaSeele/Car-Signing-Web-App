import React, { useEffect } from "react";
import "./FormType.css";

import { BrowserRouter as Route, Link, Routes } from "react-router-dom";

export const SignUp = () => {
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
    <div className="SignUp">
      <div className="img">{/* Put image link here */}</div>
      <div className="login-content">
        <form>
          {/* Icon Image here */}
          <h2 className="title">Sign Up</h2>
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
          {/*Password*/}
          <div className="input-div">
            <div className="i">
              <i className="ri-lock-fill" />
            </div>
            <div className="div">
              <h5>Password</h5>
              <input type="password" className="input" required />
            </div>
          </div>
          {/*Re Confirm Pass*/}
          <div className="input-div">
            <div className="i">
              <i className="ri-lock-fill" />
            </div>
            <div className="div">
              <h5>Re-Confirm Password</h5>
              <input type="password" className="input" required />
            </div>
          </div>
          {/*Email*/}
          <div className="input-div">
            <div className="i">
              <i className="ri-mail-fill" />
            </div>
            <div className="div">
              <h5>Email</h5>
              <input type="email" className="input" required />
            </div>
          </div>
          {/*Phone Number*/}
          <div className="input-div">
            <div className="i">
              <i className="ri-phone-fill" />
            </div>
            <div className="div">
              <h5>Phone Number</h5>
              <input type="phone" className="input" required />
            </div>
          </div>

          
          {/*Create Account*/}
          {/* <input type="submit" className="btn" value="Login" /> */}
          <button className="btn" type="submit">
            <Link to="/login" className="button-text">
              Create Account
            </Link>
          </button>
          {/*Login*/}
          <Link to="/login" className="right-text">
            Login
          </Link>
          {/*Cancel*/}
          <button className="cancel-btn">
            <Link to="/" className="button-text">
              Cancel
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};
