import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function TestSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <Slider {...settings}>
        <div><img src="/images/partner_1.svg" alt="Partner 1" /></div>
        <div><img src="/images/partner_2.svg" alt="Partner 2"  /></div>
        <div><img src="/images/partner_3.svg" alt="Partner 3" /></div>
        <div><img src="/images/partner_4.svg" alt="Partner 4"  /></div>
        <div><img src="/images/partner_5.svg" alt="Partner 5"  /></div>
      </Slider>
    </div>
  );
}
