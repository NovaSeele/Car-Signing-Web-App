import React from 'react'

export const CarForm = () => {
  return (
    <div className="CarForm">
      <div className="registration-main">
        <div className="registration-title">Đơn Khai Báo Thông Tin Xe</div>
        <div className="registration-content">
          <form className="reg-form-content">
            <div className="user-details">
              <div className="input-box">
                <span className="registration-details">Tên Xe</span>
                <input type="text" placeholder="Nhập Tên Xe" required />
              </div>
              <div className="input-box">
                <span className="registration-details">Hãng Xe</span>
                <input type="text" placeholder="Nhập Hãng Xe" required />
              </div>
              <div className="input-box">
                <span className="registration-details">Biển Xe</span>
                <input type="text" placeholder="Nhập Biển Xe" required />
              </div>
              <div className="input-box">
                <span className="registration-details">Nơi Đăng Ký</span>
                <input type="text" placeholder="Nhập Nơi Đăng Ký" required />
              </div>
              <div className="input-box">
                <span className="registration-details">Ngày Đăng Ký</span>
                <input type="date" placeholder="Nhập Ngày Đăng Ký" required />
              </div>
              <div className="input-box">
                <span className="registration-details">Ngày Hết Hạn</span>
                <input type="date" placeholder="Nhập Ngày Hết Hạn" required />
              </div>
              <div className="input-box">
                <span className="registration-details">Chủ Sở Hữu</span>
                <input type="text" placeholder="Nhập Tên Người Sở Hữu" required />
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
                  <span className="form-radio">Giấy tờ 3</span>
                </label>
                <label htmlFor="registration-dot-4">
                  <span className="dot four"></span>
                  <span className="form-radio">Giấy tờ 4</span>
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
