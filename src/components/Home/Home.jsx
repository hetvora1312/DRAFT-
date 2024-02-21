import React from "react";

import "font-awesome/css/font-awesome.css"; // Make sure you have the font-awesome library installed
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure you have the bootstrap library installed
import HomeNav from "./HomeNav"; // Make sure you have the
import Sidebar from "./HomeSidebar";
import HomeMainCaro from "./HomeMainCaro";
import HomeCaroTwo from "./HomeCaroTwo";
import HeroPartSection from "./HeroPartSection";
import "./assets/css/homepage.css";

export const Home = () => {

  
  return (
    <>
    {/* <div className="HomeMainDiv"> */}
      <HomeNav />
      <div className="MainHeroSection containerDiv">
        <div className="HeroSection">
          <Sidebar />

          <div className="MainSection">
            <HomeMainCaro />
            <HomeCaroTwo />
          </div>
        </div>
      </div>

      <HeroPartSection/>
      {/* </div> */}
    </>
  );
}
