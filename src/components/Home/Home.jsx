import React, { useState } from "react";
import { Navigate } from "react-router-dom"; // Import Redirect instead of redirect
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar1/Navbar";
import HomeSidebar from "./HomeSidebar";
import HomeMainCaro from "./HomeMainCaro";
import HomeCaroTwo from "./HomeCaroTwo";
import "./assets/css/homepage.css";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isAuthenticated = sessionStorage.getItem("userData");

  if (!!isAuthenticated) {
    return <Navigate to="/login" />; // Use Redirect as a component
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="MainHeroSection containerDiv">
        <div className="HeroSection">
          <HomeSidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
          <div
            className={`MainSection ${
              sidebarOpen ? "withSidebar" : "withoutSidebar"
            }`}
          >
            <HomeMainCaro sidebarOpen={sidebarOpen} />
            <HomeCaroTwo sidebarOpen={sidebarOpen} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
