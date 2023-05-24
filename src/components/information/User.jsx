import React from "react";
import { NavBar } from "../navBar/NavBar";
import "./Information.css";
import { Table } from "./Table";
export const User = () => {
  return (
    <div className="User">
      <NavBar />
      <Table />
    </div>
  );
};
