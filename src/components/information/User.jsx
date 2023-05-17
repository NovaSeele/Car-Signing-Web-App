import React from "react";
import { NavBar } from "../navBar/navBar";

export const User = () => {
  return (
    <div className="User">
      <NavBar />
      <img
        src="./src/assets/Seele.jpeg"
        alt="banner image"
        className="banner-image"
      />
    </div>
  );
};
