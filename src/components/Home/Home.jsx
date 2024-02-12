import React from "react";
import { Carousel } from "react-bootstrap"; // Make sure you have the react-bootstrap library installed

import "font-awesome/css/font-awesome.css"; // Make sure you have the font-awesome library installed
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure you have the bootstrap library installed
import HomeNav from "./HomeNav"; // Make sure you have the
import Sidebar from "./HomeSidebar";
import HomeMainCaro from "./HomeMainCaro";
import HomeCaroTwo from "./HomeCaroTwo";
import HeroPartSection from "./HeroPartSection";
import "./assets/css/homepage.css";



export const Home = () =>{
    
  return (
    <>
      <HomeNav />
      <div className="MainHeroSection container">
        <div className="HeroSection">
          <Sidebar />

          <div className="MainSection">
            <HomeMainCaro />
            <HomeCaroTwo />
          </div>
        </div>
      </div>

      <HeroPartSection/>
      
    </>
  );

} 
