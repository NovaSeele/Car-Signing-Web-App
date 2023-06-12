import React, { useState } from "react";
import { BrowserRouter as Route, Link, Routes } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";
import "./Info.css";

export const CarInfo = () => {
  return (
    <div className="CarInfo">
      <div className="left-info">
        <img src="https://i.imgur.com/m7MiPOa.jpg" alt="user" width="100" />
        <h4>Name</h4>
        <p>Name&apos;s description</p>
      </div>
      <div className="right-info">
        <div className="info">
          <h3>Thông tin</h3>
          <div className="info_data">
            <div className="data">
              <h4>Biển xe</h4>
              <p>Biển xe</p>
            </div>
            <div className="data">
              <h4>Thương hiệu xe</h4>
              <p>Honda</p>
            </div>
            <div className="data">
              <h4>Ngày đăng kiểm</h4>
              <p>Ngày</p>
            </div>
            <div className="data">
              <h4>Nơi đăng kiểm</h4>
              <Link to="/registrationcenter">
                <p className="dataHover">Đăng kiểm xe</p>
              </Link>
            </div>
            <div className="data">
              <h4>Chủ xe</h4>
              <Link to="/userinfo">
                <p className="dataHover">Seele Vollerei</p>
              </Link>
            </div>
            <div className="data">
              <h4>Giấy phép đăng kiểm</h4>
              <p>
                Link giấy phép đăng kiểm ném vào đây{" "}
                {/* Ném ảnh giấy phép đăng kiểm vào đây thay cho thẻ này */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
