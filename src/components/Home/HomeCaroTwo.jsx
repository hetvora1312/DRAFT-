import { React, useEffect ,useState} from "react";
import Slider from 'react-slick';

import './assets/css/homeCaroTwo.css';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';


const HeroBottom = () => {

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
      const handleResize = () => {
          // Update slidesToShow based on screen width
          console.log(window.innerWidth);
          if (window.innerWidth < 500) {
              setSlidesToShow(1);
          } else if (window.innerWidth < 990) {
              setSlidesToShow(2);
          }  else {
            setSlidesToShow(3);
        }
      };

      // Initial setup
      handleResize();

      // Event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);


    const settings = {
        arrows:false,
        slidesToShow:slidesToShow,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:200
    }

  return (
    <div className="HeroBottom">
        <div className="slick-slider">
        <Slider {...settings}>
           <div><img className="SlickImg" src={img1} alt="Slide 1" /></div>
        <div><img className="SlickImg" src={img2} alt="Slide 2" /></div>
        <div><img className="SlickImg" src={img1} alt="Slide 3" /></div>
        <div><img className="SlickImg" src={img2} alt="Slide 1" /></div>
        <div><img className="SlickImg" src={img1} alt="Slide 2" /></div>
        <div><img className="SlickImg" src={img2} alt="Slide 3" /></div>
        </Slider>
        </div>
    </div>
  );
};

export default HeroBottom;
