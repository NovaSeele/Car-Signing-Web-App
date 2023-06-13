import React, { useEffect, useState } from "react";
import "./FormType.css";

import { BrowserRouter as Route, Link, Routes } from "react-router-dom";

export const SignUp = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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


  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    // Check if the passwords match
    if (password !== password2) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      // Send a request to the backend to create a new user account
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/inspection/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // User account created successfully
        console.log("Signup successful");
        // Redirect to the login page
        setErrorMessage("Signup successful, redirecting to login page");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        // Error occurred during signup
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      setErrorMessage("Error occurred during signup");
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
    <div className="Page">
      <div className="img">{/* Put image link here */}</div>
      <div className="login-content">
        <form className="login-form-content" onSubmit={handleSignUp}>
          {/* Icon Image here */}
          <h2 className="title">Sign Up</h2>
          {/*Email*/}
          <div className="input-div">
            <div className="i">
              <i className="ri-mail-fill" />
            </div>
            <div className="input-container">
              <h5>Email</h5>
              <input type="email" className="input" required onChange={e => setEmail(e.target.value)}/>
            </div>
          </div>
          {/*Password*/}
          <div className="input-div">
            <div className="i">
              <i className="ri-lock-fill" />
            </div>
            <div className="input-container">
              <h5>Password</h5>
              <input type="password" className="input" required onChange={e => setPassword(e.target.value)}/>
            </div>
          </div>
          {/*Re Confirm Pass*/}
          <div className="input-div">
            <div className="i">
              <i className="ri-lock-fill" />
            </div>
            <div className="input-container">
              <h5>Re-Confirm Password</h5>
              <input type="password" className="input" required onChange={e => setPassword2(e.target.value)}/>
            </div>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {/*Create Account*/}
          {/* <input type="submit" className="btn" value="Login" /> */}
          <button className="btn" type="submit">
            <div className="button-text">
              Create Account
            </div>
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
