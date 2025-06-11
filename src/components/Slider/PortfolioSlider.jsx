import React from 'react';
import Portfolio from '../Portfolio';
import Div from '../Div';
import Slider from 'react-slick';
import './portfolio-slider-unique.scss';

export default function PortfolioSlider({ data }) {
  /** Slider Settings **/
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '8%',
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: 'cubic-bezier(0.23,1,0.32,1)',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-slider cs-style3 cs-gap-24 portfolio-slider-unique">
      {data.map((item, index) => (
        <Div key={index} className="portfolio-slide-item">
          <Portfolio
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  );
}
