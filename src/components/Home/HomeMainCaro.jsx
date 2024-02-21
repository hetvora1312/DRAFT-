import React from "react";
import { Carousel } from "react-bootstrap";
import "./assets/css/homeMainCaro.css";

// DATA carousel
import {carouselData} from './HomeData';

function HomeMainCaro() {
  return (
    <div className="HeroTop">
      
      <Carousel id="carouselExample" data-bs-ride="carousel">
        

        {carouselData.map((data,index) => (
            <Carousel.Item key={index}>
            <div className="HomeCarouselContentDiv">
              <div className="HomeCarouselContentHeading">
                <p>{data.heading}</p>
              </div>
              <div className="HomeCarouselContent">
                <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
                {/* {data.content} */}

              </div>
              <button className="HomeCarouselButton1">{data.buttonText}</button>
  
            </div>
          </Carousel.Item>
        ))}
        
      </Carousel>
    </div>
  );
}



export default HomeMainCaro;
