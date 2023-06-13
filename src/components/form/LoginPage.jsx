import React, { useEffect, useState } from "react";
import "./FormType.css";

import { BrowserRouter as Route, Link, Routes } from "react-router-dom";
export const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  // fetch jwt token
  const fetchToken = async (credentials) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/inspection/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials)
    }).then((response) => response.json());
    return response;
  }

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [email, password] = e.target.elements;
    const credentials = {
      email: email.value,
      password: password.value
    }
    const response = await fetchToken(credentials);
    console.log(response);
    if (response.access) { // if token is returned
      localStorage.setItem("access", response.access);
      window.location.href = "/";
    }
  }
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
    <div className="Page">
      <div className="img">
        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" alt="Inspection Logo" />
      </div>
      <div className="login-content">
        <form className="login-form-content" onSubmit={handleSubmit}>
          {/* Icon Image here */}
          <h2 className="title">Welcome </h2>
          {/*User Name*/}
          <div className="input-div">
            <div className="i">
              <i className="ri-user-fill" />
            </div>
            <div className="input-container">
              <h5>Username</h5>
              <input id="email" name="email" type="text" className="input" required onChange={e => setEmail(e.target.value)} />
            </div>
          </div>
          {/*Password*/}
          <div className="input-div">
            <div className="i">
              <i className="ri-lock-fill" />
            </div>
            <div className="input-container">
              <h5>Password</h5>
              <input id="password" name="password" type="password" className="input" required onChange={e => setPassword(e.target.value)} />
            </div>
          </div>
          {/*Forgot Password*/}
          <Link to="/forgotPassword" className="right-text">
            Forgot Password
          </Link>
          {/*Login Button*/}
          <button className="btn" type="submit">
            <div className="button-text">Login</div>
          </button>
          {/*Sign Up*/}
          <Link to="/signup" className="right-text">
            Sign Up
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
