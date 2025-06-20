import React, { useState } from 'react';
import Slider from 'react-slick';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';

const testimonialData = [
  {
    testimonialThumb: '/images/CLIENT.png',
    testimonialText: 'We wanted one unique logo and packaging for our brand. Communication from their end was quick and transparent.',
    avatarName: 'Fayakun',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/CLIENT.png',
    testimonialText: 'From marketing, managing operations to creating promotional materials, Ibrahim has been with us since the start. We have known him for years, and his efforts are worth appreciating.',
    avatarName: 'Indo US Hospitals',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/CLIENT.png',
    testimonialText: 'I needed personal branding to be done for me, and I am extremely happy with the website created by the team. Managing my patients became convenient and easy through it.',
    avatarName: 'Nagarjuna',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/CLIENT.png',
    testimonialText: 'We were clear with our vision to start an interior designing company and Raising 100x came up with a beautiful logo, website, business cards and social media creatives too. I was very impressed with the quality of work done.',
    avatarName: 'Nazara Interiors',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/CLIENT.png',
    testimonialText: 'My requirements for logo creation could not have been fulfilled anywhere other than Raising 100x. The way I imagined the logo to be, the team created it just like that.',
    avatarName: 'Oak Hospitals',
    ratings: '5',
  },
];

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <>
      {/* Add spacing between previous section and testimonials */}
      <div style={{ height: '40px', }} />

      <Div
        className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax"
        style={{ position: 'relative', zIndex: 2  ,}} // ensure testimonial sits above video background
      >
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container"  >
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                arrows={false}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
