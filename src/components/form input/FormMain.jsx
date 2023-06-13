import React from "react";
import { NavBar } from "../navBar/NavBar";
import { Footer } from "../navBar/Footer";
import { BrowserRouter as Route, Link, Routes } from "react-router-dom";
import "./RegForm.css";
import { OwnerForm } from "./OwnerForm";
import { CompanyForm } from "./CompanyForm";
import { CarForm } from "./CarForm";

export const FormMain = () => {
  return (
    <div className="FormMain">
      <NavBar />
      {/* Header */}
      <div className="intro-header">
        <div className="intro-content">
          <div className="intro-text">
            <h1 className="header-jumbo">RegistryTotal-Regist</h1>
            <p className="p-bigger">Đăng ký thông tin xe của bạn ở đây. Thông tin của bạn sẽ được cập nhật vào bảng dữ liệu</p>
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
          <input className="radio" id="one" name="group" type="radio" />
          <input className="radio" id="two" name="group" type="radio" />
          <input className="radio" id="three" name="group" type="radio" />

          <div className="tabs">
            <label className="tab" id="one-tab" htmlFor="one">
              Cá nhân<i className="ri-user-3-line"></i>
            </label>
            <label className="tab" id="two-tab" htmlFor="two">
              Công ty<i className="ri-building-line"></i>
            </label>
            <label className="tab" id="three-tab" htmlFor="three">
              Car<i className="ri-car-line"></i>
            </label>
          </div>

          <div className="panels">
            <div className="panel" id="one-panel">
              <OwnerForm />
            </div>
            <div className="panel" id="two-panel">
              <CompanyForm />
            </div>
            <div className="panel" id="three-panel">
              <CarForm />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
