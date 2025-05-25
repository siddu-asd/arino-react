import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Div from '../Div';
import Post from '../Post';

const postData = [
  {
    id: 'fear-vs-art-business',
    url: '/blog/fear-vs-art-business',
    src: '/images/post_1.jpeg',
    alt: 'Post',
    date: '07 Mar 2022',
    title: 'How to keep fear from ruining your art business with confidence',
  },
  {
    id: 'artistic-creation',
    url: '/blog/artistic-creation',
    src: '/images/post_2.jpeg',
    alt: 'Post',
    date: '10 Feb 2022',
    title: 'Artistic mind will be great for creation of anything',
  },
  {
    id: 'ai-takes-over',
    url: '/blog/ai-takes-over',
    src: '/images/post_3.jpeg',
    alt: 'Post',
    date: '05 Mar 2022',
    title: 'A.I will take over all jobs for humans within next year',
  },
  {
    id: 'creative-studio',
    url: '/blog/creative-studio',
    src: '/images/post_5.jpeg',
    alt: 'Post',
    date: '05 Mar 2022',
    title: 'Creative studio program coming soon',
  },
  {
    id: 'artistic-mind',
    url: '/blog/artistic-mind',
    src: '/images/post_6.jpeg',
    alt: 'Post',
    date: '04 Mar 2022',
    title: 'Artistic mind will be great for creation',
  },
];

export default function PostSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 3 } },
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24">
      {postData.map((item) => (
        <Div key={item.id}>
          <Link to={item.url} style={{ textDecoration: 'none' }}>
            <Post
              url={item.url}
              src={item.src}
              alt={item.alt}
              date={item.date}
              title={item.title}
            />
          </Link>
        </Div>
      ))}
    </Slider>
  );
}
