import React from 'react'
import "./RegForm.css";

export const CompanyForm = () => {
  return (
    <div className="CompanyForm">
      <div className="registration-main">
        <div className="registration-title">
          Đơn Khai Báo Đăng kiểm xe cho công ty
        </div>
        <div className="registration-content">
          <form className="reg-form-content">
            <div className="user-details">
              <div className="input-box">
                <span className="registration-details">Tên đầy đủ tổ chức</span>
                <input type="text" placeholder="Nhập Tên" required />
              </div>
              <div className="input-box">
                <span className="registration-details">Địa Chỉ</span>
                <input type="text" placeholder="Nhập Địa Chỉ" required />
              </div>
              <div className="input-box">
                <span className="registration-details">
                  Tên đầy đủ người đại diện
                </span>
                <input
                  type="text"
                  placeholder="Nhập Tên Người Đại Diện"
                  required
                />
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
              <input type="radio" name="form-radio" id="registration-dot-1" />
              <input type="radio" name="form-radio" id="registration-dot-2" />
              <input type="radio" name="form-radio" id="registration-dot-3" />
              <input type="radio" name="form-radio" id="registration-dot-4" />
              <span className="gender-title">Kiểm Tra các Loại Giấy Tờ</span>
              <div className="category">
                <label htmlFor="registration-dot-1">
                  <span className="dot one"></span>
                  <span className="form-radio">Giấy tờ 1</span>
                </label>
                <label htmlFor="registration-dot-2">
                  <span className="dot two"></span>
                  <span className="form-radio">Giấy tờ 2</span>
                </label>
                <label htmlFor="registration-dot-3">
                  <span className="dot three"></span>
                  <span className="form-radio">Giấy tờ 2</span>
                </label>
                <label htmlFor="registration-dot-4">
                  <span className="dot four"></span>
                  <span className="form-radio">Giấy tờ 2</span>
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
}
