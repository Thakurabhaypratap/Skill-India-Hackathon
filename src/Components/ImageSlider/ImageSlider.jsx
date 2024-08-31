import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="i.png" alt="Image 1" />
        </div>
        <div>
          <img src="i.png" alt="Image 2" />
        </div>
        <div>
          <img src="i.png" alt="Image 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default ImageSlider;
