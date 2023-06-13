import React from "react";
import { NavBar } from "../navBar/NavBar";
import { Table } from "./Table";
import { Footer } from "../navBar/Footer";

export const InfoTable = () => {
  return (
    <div className="InfoTable">
      <NavBar />
      <Table />
      <Footer />
    </div>
  );
};
