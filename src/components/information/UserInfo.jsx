import React from "react";
import { NavBar } from "../navBar/NavBar";
import "./Info.css";

export const UserInfo = () => {
  return (
    <div className="UserInfo">
      <div className="left-info">
        <img src="https://i.imgur.com/m7MiPOa.jpg" alt="user" width="100" />
        <h4>Name</h4>
        <p>Name's description</p>
      </div>
      <div className="right-info">
        <div className="info">
          <h3>Information</h3>
          <div className="info_data">
            <div className="data">
              <h4>Địa chỉ</h4>
              <p>Địa chỉ nhà</p>
            </div>
            <div className="data">
              <h4>Email</h4>
              <p>novaseele@gmail.com</p>
            </div>
            <div className="data">
              <h4>Thông tin khác</h4>
              <p>Các thông tin khác</p>
            </div>
          </div>
        </div>

        <div className="info_data">
          <h3>Car</h3>
          <div className="info_data">
            <div className="data">
              <h4>Danh sách xe</h4>
              <p>Car Detail</p>
            </div>
            <div className="data">
              <h4>Nơi đăng kiểm</h4>
              <p>Chi tiết</p>
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
          </ul>
        </div>
      </div>
    </div>
  );
};
