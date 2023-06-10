import React from "react";
import { NavBar } from "./components/navBar/NavBar";
import { BrowserRouter as Route, Link, Routes } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <div className="section-content">
        <div className="intro-header">
          <div className="intro-content">
            <div className="intro-text">
              <h1 className="header-jumbo">RegistryTotal</h1>
              <p className="p-bigger">Ko biet dien text gi vao day</p>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="relax-content">
            <label className="relax-header">Relax Header</label>
            <p className="p-smaller">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            </p>
          </div>
          <div className="home-content">
            <div className="grid-content-left">
              <div className="left-block">
                <div className="block-text">
                  <label className="about">About</label>
                  <h3 className="block-heading">Content 1</h3>
                  <p className="block-main-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="block-button-div">
                  <button className="block-button">Learn More</button>
                </div>
              </div>
              <div className="image-block-right">nhet anh ben trai vao day</div>
            </div>

            <div className="grid-content-right">
              <div className="image-block-left">nhet anh ben phai vao day</div>
              <div className="right-block">
                <div className="block-text">
                  <label className="about">About</label>
                  <h3 className="block-heading">Content 2</h3>
                  <p className="block-main-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
            <a href="#">Blog </a>
            <a href="#">Pricing </a>
            <a href="#">About </a>
            <a href="#">Faq </a>
            <a href="#">Contact </a>
          </p>
          <p className="footer-company-name">Company Name © 2015</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="ri-map-pin-line"></i>
            <p>
              <span>Address number</span> Address City
            </p>
          </div>
          <div>
            <i className="ri-phone-line"></i>
            <p>Phone number</p>
          </div>
          <div>
            <i className="ri-mail-line"></i>
            <p>
              <a href="mailto:support@company.com">Mail link</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
          <div className="footer-icons">
            <a href="#">
              <i className="ri-facebook-line"></i>
            </a>
            <a href="#">
              <i className="ri-twitter-line"></i>
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
