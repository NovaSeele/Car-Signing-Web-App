import React from "react";
import { NavBar } from "../navBar/NavBar";
import { RegForm } from "./RegForm";
import { BrowserRouter as Route, Link, Routes } from "react-router-dom";
import "./RegForm.css";
import { OwnerForm } from "./OwnerForm";
import { CompanyForm } from "./CompanyForm";

export const FormMain = () => {
  return (
    <div className="FormMain">
      <NavBar />
      {/* Header */}
      <div className="intro-header">
        <div className="intro-content">
          <div className="intro-text">
            <h1 className="header-jumbo">RegistryTotal-Statistical table</h1>
            <p className="p-bigger">
              Danh sách thông tin về các xe đã đằng kiểm, sắp đăng kiểm, hoặc
              sắp hết hạn
            </p>
          </div>
        </div>
      </div>
      {/* Form */}
      <div className="tab-form">
        <div className="warpper">
          <input
            className="radio"
            id="one"
            name="group"
            type="radio"
            defaultChecked
          />
          <input className="radio" id="two" name="group" type="radio" />
          <input className="radio" id="three" name="group" type="radio" />

          <div className="tabs">
            <label className="tab" id="one-tab" htmlFor="one">
              Cá nhân
            </label>
            <label className="tab" id="two-tab" htmlFor="two">
              Công ty
            </label>
          </div>

          <div className="panels">
            <div className="panel" id="one-panel">
              <OwnerForm />
            </div>
            <div className="panel" id="two-panel">
              <CompanyForm />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Register<span>Total</span>
          </h3>
          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
          </p>
          <p className="footer-company-name">Company Name © 2015</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="ri-map-pin-line"></i>
            <p>
              <span>36 Dich Vong Hau</span> Hanoi
            </p>
          </div>
          <div>
            <i className="ri-phone-line"></i>
            <p>0999.999.999</p>
          </div>
          <div>
            <i className="ri-mail-line"></i>
            <p>
              <a href="mailto:support@company.com">registrytotal@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            RegistryTotal is a web application developed to support the
            Registration Deparment and registration centers nationwide in
            managing vehicle inspections for automobiles.
          </p>
          <div className="footer-icons">
            <a href="#">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="#">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="#">
              <i className="ri-github-fill"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
