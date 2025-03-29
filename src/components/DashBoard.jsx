import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const DashBoard = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DashBoard;
