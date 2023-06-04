import React, { useState } from "react";
import { BrowserRouter as Route, Link, Routes } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";
import "./Info.css";

export const RegistrationCenter = () => {
  return (
    <div className="RegCenter">
      <div className="left-info">
        <img src="https://i.imgur.com/m7MiPOa.jpg" alt="user" width="100" />
        <h4>Name</h4>
        <p>Name's description</p>
      </div>
      <div className="right-info">
        <div className="info">
          <h3>Trung tâm đăng kiểm Honkai</h3>
          <div className="info_data">
            <div className="data">
              <h4>Địa chỉ</h4>
              <p>Địa chỉ nào đó</p>
            </div>
            <div className="data">
              <h4>Ngày thành lập</h4>
              <p>Ngày</p>
            </div>
            <div className="data">
              <h4>Số xe đã đăng kiểm</h4>
              <p>Xe</p>
            </div>
            <div className="data">
              <h4>Giờ làm việc</h4>
              <p>8AM - 17PM</p>
            </div>
            <div className="data">
              <h4>Giấy phép hoạt động</h4>
              <p>
                Link giấy phép đăng kiểm ném vào đây{" "}
                {/* Ném ảnh giấy phép đăng kiểm vào đây thay cho thẻ này */}
              </p>
            </div>
          </div>
        </div>
        <div className="contact">
          <h3>Thông tin liên hệ</h3>

          <ul className="contact-icon">
            <li>
              <i class="ri-facebook-fill"></i>
            </li>
            <li>
              <i class="ri-messenger-fill"></i>
            </li>
            <li>
              <i class="ri-phone-fill"></i>
            </li>
            <li>
              <i class="ri-mail-fill"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};