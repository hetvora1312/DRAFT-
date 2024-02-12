import React from 'react';
import { Carousel } from 'react-bootstrap';
import './assets/css/homeMainCaro.css';
import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';

function HomeMainCaro() {
  return (
    <div className="HeroTop">
      {/* Using React Bootstrap Carousel component */}
      <Carousel id="carouselExample" data-bs-ride="carousel">
        {/* Carousel items */}
        <Carousel.Item>
          <img className="CaroImg d-block w-100" src={img1} alt="Mountain" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="CaroImg d-block w-100" src={img2} alt="Snow" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="CaroImg d-block w-100" src={img1} alt="Pilgrim" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeMainCaro;
