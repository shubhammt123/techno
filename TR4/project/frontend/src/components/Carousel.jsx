// Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Silder1 from "../assets/1.jpg";
import Silder2 from "../assets/2.jpg";


const Carousel = () => {
  const settings = {
    dots: true,           // Pagination dots visible
    infinite: true,       // Infinite loop
    speed: 500,           // Transition speed in ms
    slidesToShow: 1,      // Number of slides to show at a time
    slidesToScroll: 1,    // Number of slides to scroll at a time
    autoplay: true,       // Auto-play enabled
    autoplaySpeed: 2000,  // Auto-play speed in ms
  };

  return (
    <div style={{ width: "90%", margin: "auto", paddingTop: "20px" }}>
      <Slider {...settings}>
        <div>
          <img
            src={Silder1}
            alt="Image 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={Silder1}
            alt="Image 2"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={Silder1}
            alt="Image 3"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
