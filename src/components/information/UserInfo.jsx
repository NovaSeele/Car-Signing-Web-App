import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { NavBar } from "../navBar/NavBar";
import { Footer } from "../navBar/Footer";
import "./Info.css";

export const UserInfo = () => {

  const [ownerData, setOwnerData] = useState({});

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const owner_id = searchParams.get("owner_id");
  console.log(owner_id);

  useEffect(() => {
    const headers = 
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      }
    }
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/inspection/owner/${owner_id}/`,headers);

        if (response.ok) {
          const data = await response.json();
  
          setOwnerData(data);
          console.log(data);
        } else {
          console.error("Failed to fetch inspection data, owner data, or vehicle data.");
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="User_Info">
      <NavBar />
      <div className="UserInfo">
        <div className="left-info">
          <img src="https://i.imgur.com/m7MiPOa.jpg" alt="user" width="100" />
          <h4>{ownerData.owner_info}</h4>
          <p>Name&apos;s description</p>
        </div>
        <div className="right-info">
          <div className="info">
            <h3>Thông tin chủ sở hữu xe</h3>
            <div className="info_data">
              <div className="data">
                <h4>Địa chỉ</h4>
                <p>{ownerData.province}</p>
              </div>
              <div className="data">
                <h4>Email</h4>
                <p>novaseele@gmail.com</p>
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
            </div>
          </div>

          <div className="contact">
            <h3>Thông tin liên hệ</h3>

            <ul className="contact-icon">
              <li>
                <i className="ri-facebook-fill"></i>
              </li>
              <li>
                <i className="ri-messenger-fill"></i>
              </li>
              <li>
                <i className="ri-phone-fill"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer */} 
      <Footer />
    </div>
  );
};
