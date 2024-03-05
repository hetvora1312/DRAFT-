import React, { useState } from "react";
import { Navigate } from "react-router-dom"; // Import Redirect instead of redirect
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeNav from "./HomeNav";
import HomeSidebar from "./HomeSidebar";
import HomeMainCaro from "./HomeMainCaro";
import HomeCaroTwo from "./HomeCaroTwo";
import HeroPartSection from "./HeroPartSection";
import "./assets/css/homepage.css";

export const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isAuthenticated = sessionStorage.getItem("userData");

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Use Redirect as a component
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <HomeNav />
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
      <HeroPartSection />
    </>
  );
};
