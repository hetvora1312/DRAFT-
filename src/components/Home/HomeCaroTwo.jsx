import { React } from "react";

import "./assets/css/homeCaroTwo.css";

import { HomeBottomData } from "./HomeData";

const HeroBottom = ({sidebarOpen}) => {
  const contentDivClassName = sidebarOpen
    ? "HomeContent2Div"
    : "HomeContent2Div fullWidth"; // Add a class for full width when sidebar is closed
  return (
    <div className="HeroBottom">

      <div className={contentDivClassName}>

        {HomeBottomData.map((item, index) => (
          <div className="HomeContent2SubDiv" key={index}>
            <div className="HomeContent2SubDiv2">
              <img className="HomeContent2Image" src={item.image} alt="buds" />
              <div className="HomeContent2SubContent">
                <p className="HomeContent2SubContentHeading">{item.heading}</p>
                <p className="HomeContent2SubContentDesc">{item.description}</p>
              </div>
            </div>
            <button className="HomeContent2SubButton">Explore</button>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default HeroBottom;
