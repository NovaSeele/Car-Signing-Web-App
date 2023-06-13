import React from "react";
import { NavBar } from "./components/navBar/NavBar";
import { BrowserRouter as Route, Link, Routes } from "react-router-dom";
import "./Home.css";
import carjpg from "./assets/car.jpg";
import xejpg from "./assets/xe.jpg";
export const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <div className="section-content">
        <div className="intro-header">
          <div className="intro-content">
            <div className="intro-text">
              <h1 className="header-jumbo">RegistryTotal</h1>
              <p className="p-bigger">Registration management system</p>
            </div>
          </div>
        </div>


        <div className="main-content">
          <div className="relax-content">
            <label className="relax-header"></label>
            <p className="p-smaller">
              Vietnam&apos;s leading registration management system
            </p>
          </div>
          <div className="home-content">
            <div className="grid-content-left">
              <div className="left-block">
                <div className="block-text">
                  <label className="about">About</label>
                  <h3 className="block-heading">Content 1</h3>
                  <p className="block-main-text">
                    Assist Registration Department
                  </p>
                </div>
                <div className="block-button-div">
                  <button className="block-button">Learn More</button>
                </div>
              </div>
              <div className="image-block-right">
                <img src={carjpg} alt="Pic" width="100%" height="100%" />
              </div>
            </div>

            <div className="grid-content-right">
              <div className="image-block-left">
                <img src={xejpg} alt="Pic" width="100%" height="100%" />
              </div>
              <div className="right-block">
                <div className="block-text">
                  <label className="about">About</label>
                  <h3 className="block-heading">Content 2</h3>
                  <p className="block-main-text">
                    Assist Registration Center
                  </p>
                </div>
                <div className="block-button-div">
                  <button className="block-button">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            RegistryTotal is a web application developed to support the Registration Deparment and registration centers nationwide in managing vehicle inspections for automobiles.
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
