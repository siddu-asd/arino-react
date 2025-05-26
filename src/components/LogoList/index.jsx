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
       <div><img src="/images/1.png" alt="Partner 1" /></div>
<div><img src="/images/2.png" alt="Partner 2" /></div>
<div><img src="/images/3.png" alt="Partner 3" /></div>
<div><img src="/images/4.png" alt="Partner 4" /></div>
<div><img src="/images/5.png" alt="Partner 5" /></div>
<div><img src="/images/6.png" alt="Partner 6" /></div>
<div><img src="/images/7.png" alt="Partner 7" /></div>
<div><img src="/images/8.png" alt="Partner 8" /></div>
<div><img src="/images/9.png" alt="Partner 9" /></div>
<div><img src="/images/10.png" alt="Partner 10" /></div>
<div><img src="/images/11.png" alt="Partner 11" /></div>
<div><img src="/images/12.png" alt="Partner 12" /></div>
<div><img src="/images/13.png" alt="Partner 13" /></div>
<div><img src="/images/14.png" alt="Partner 14" /></div>
<div><img src="/images/15.png" alt="Partner 15" /></div>
<div><img src="/images/16.png" alt="Partner 16" /></div>
<div><img src="/images/17.png" alt="Partner 17" /></div>
<div><img src="/images/18.png" alt="Partner 18" /></div>
<div><img src="/images/19.png" alt="Partner 19" /></div>
<div><img src="/images/20.png" alt="Partner 20" /></div>
      </Slider>
    </div>
  );
}
