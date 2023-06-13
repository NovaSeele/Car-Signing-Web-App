import React from "react";
import "./RegForm.css";

export const OwnerForm = () => {
  return (
    <div className="OwnerForm">
      <div className="registration-main">
        <div className="registration-title">
          Đơn Khai Báo Đăng kiểm xe cho cá nhân
        </div>
        <div className="registration-content">
          <form className="reg-form-content">
            <div className="user-details">
              <div className="input-box">
                <span className="registration-details">Tên đầy đủ</span>
                <input type="text" placeholder="Nhập Tên" required />
              </div>
              <div className="input-box">
                <span className="registration-details">
                  Ngày Tháng Năm Sinh
                </span>
                <input type="date" required />
              </div>
              <div className="input-box">
                <span className="registration-details">
                  Chứng Minh Nhân Dân
                </span>
                <input type="text" placeholder="Nhập số CMND" required />
              </div>
              <div className="input-box">
                <span className="registration-details">Số Điện Thoại</span>
                <input type="text" placeholder="Nhập SĐT" required />
              </div>
              <div className="input-box">
                <span className="registration-details">Email</span>
                <input type="text" placeholder="Nhập Email" required />
              </div>
            </div>
            <div className="gender-details">
              <span className="gender-title">Kiểm Tra các Loại Giấy Tờ</span>
              <div className="category">
                <label class="checkbox-container">
                  One
                  <input type="checkbox"></input>
                  <span class="checkmark"></span>
                </label>

                <label class="checkbox-container">
                  Two
                  <input type="checkbox"></input>
                  <span class="checkmark"></span>
                </label>

                <label class="checkbox-container">
                  Three
                  <input type="checkbox"></input>
                  <span class="checkmark"></span>
                </label>

                <label class="checkbox-container">
                  Four
                  <input type="checkbox"></input>
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="registration-button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
