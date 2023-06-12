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
    </div>
  );
};
