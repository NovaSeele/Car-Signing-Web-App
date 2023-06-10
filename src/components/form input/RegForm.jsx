import React from "react";
import "./RegForm.css"

export const RegForm = () => {
  return (
    <div className="registration-main">
      <div className="registration-title">Registration</div>
      <div className="registration-content">
        <form className="reg-form-content">
          <div className="user-details">
            <div className="input-box">
              <span className="registration-details">Full Name</span>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="input-box">
              <span className="registration-details">Username</span>
              <input type="text" placeholder="Enter your username" required />
            </div>
            <div className="input-box">
              <span className="registration-details">Email</span>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="input-box">
              <span className="registration-details">Phone Number</span>
              <input type="text" placeholder="Enter your number" required />
            </div>
            <div className="input-box">
              <span className="registration-details">Password</span>
              <input type="text" placeholder="Enter your password" required />
            </div>
            <div className="input-box">
              <span className="registration-details">Confirm Password</span>
              <input type="text" placeholder="Confirm your password" required />
            </div>
            <div className="input-box">
              <span className="registration-details">Address</span>
              <input type="date" placeholder="Enter your address" required />
            </div>
          </div>
          <div className="gender-details">
            <input type="radio" name="form-radio" id="registration-dot-1" />
            <input type="radio" name="form-radio" id="registration-dot-2" />
            <input type="radio" name="form-radio" id="registration-dot-3" />
            <input type="radio" name="form-radio" id="registration-dot-4" />
            <span className="gender-title">Gender</span>
            <div className="category">
              <label htmlFor="registration-dot-1">
                <span className="dot one"></span>
                <span className="form-radio">Male</span>
              </label>
              <label htmlFor="registration-dot-2">
                <span className="dot two"></span>
                <span className="form-radio">Female</span>
              </label>
              <label htmlFor="registration-dot-3">
                <span className="dot three"></span>
                <span className="form-radio">Prefer not to say</span>
              </label>
              <label htmlFor="registration-dot-4">
                <span className="dot four"></span>
                <span className="form-radio">Idk</span>
              </label>
            </div>
          </div>
          <div className="registration-button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};
