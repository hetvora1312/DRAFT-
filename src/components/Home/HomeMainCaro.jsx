import {React , useState} from "react";
import { Carousel } from "react-bootstrap";
import "./assets/css/homeMainCaro.css";

// DATA carousel
import {carouselData} from './HomeData';

function HomeMainCaro({ sidebarOpen }) {

  const [hovered, setHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const contentDivClassName = sidebarOpen
    ? "HomeCarouselContentDiv"
    : "HomeCarouselContentDiv fullWidth"; // Add a class for full width when sidebar is closed

  return (
    <div
      className="HeroTop"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      <Carousel id="carouselExample" data-bs-ride="carousel" activeIndex={activeIndex} onSelect={handleSelect}>
        {carouselData.map((data, index) => (
          <Carousel.Item key={index}>
            <div className={contentDivClassName}>
              <div className="HomeCarouselContentHeading">
                <p>{data.heading}</p>
              </div>
              <div className="HomeCarouselContent">
                <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
              </div>
              <button className="HomeCarouselButton1">{data.buttonText}</button>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      {hovered && (
        <ol className="carousel-indicators">
          {carouselData.map((_, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={index === activeIndex ? 'active' : ''}
            />
          ))}
        </ol>
      )}
    </div>
  );
}

export default HomeMainCaro;
