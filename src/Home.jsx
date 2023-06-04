import React from 'react'
import { NavBar } from "./components/navBar/NavBar";
import { BrowserRouter as Route, Link, Routes } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <div className="banner-image">
        {/* <img src="./src/assets/banner.jpg" alt="" /> */}
      </div>
    </div>
  );
}
