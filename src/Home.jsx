import React from 'react'
import { NavBar } from "./components/navBar/navBar";
import { BrowserRouter as Route, Link, Routes } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <img src="./src/assets/Seele.jpeg" alt="banner image" className='banner-image' />
    </div>
  );
}
