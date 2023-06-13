import React from "react";
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/navBar/Footer";
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
                  <label className="about">Thống kê</label>
                  <h3 className="block-heading">
                    Bảng thống kê thông tin đăng kiểm
                  </h3>
                  <p className="block-main-text">Xem danh sách các xe được đăng kiểm. Thông tin về xe và người dùng.</p>
                </div>
                <div className="block-button-div">
                  <button className="block-button">
                    <Link to="/infotable">
                      <span>Thống Kê</span>
                    </Link>
                  </button>
                </div>
              </div>
              <div className="image-block-right">
                <img
                  src="src/assets/car.jpg"
                  alt="Pic"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>

            <div className="grid-content-right">
              <div className="image-block-left">
                <img
                  src="src/assets/xe.jpg"
                  alt="Pic"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="right-block">
                <div className="block-text">
                  <label className="about">Khai Báo</label>
                  <h3 className="block-heading">Khai báo thông tin đăng kiêm xe</h3>
                  <p className="block-main-text">Hệ thống đơn ghi nhận đăng kiểm xe online</p>
                </div>
                <div className="block-button-div">
                  <button className="block-button">
                    <Link to="/formmain">
                      <span>Khai Báo</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
