import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/SharedPage/Footer/Footer";
import Navbar from "../../Pages/SharedPage/Navbar/Navbar";
import SideNavbar from "../../Pages/SharedPage/SideNavbar/SideNavbar";

const Main = () => {
  return (
    <div className="w-full">
      <div className="flex ">
        <div>
          <SideNavbar></SideNavbar>
        </div>
        <div className="flex-1">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
