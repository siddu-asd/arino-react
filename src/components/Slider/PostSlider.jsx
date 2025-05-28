import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Div from '../Div';
import Post from '../Post';

const postData = [
  {
    id: 'marketing-trends-2025',
    url: '/blog/marketing-trends-2025',
    src: 'images/Marketing-in-2025-The-Trends-Youre-Not-Ready-For.jpg',
    alt: 'Marketing Trends 2025',
    date: '28 May 2025',
    title: 'Marketing Trends 2025: The Trends You’re Not Ready For',
  },
  {
    id: 'adaptive-brand-strategies',
    url: '/blog/adaptive-brand-strategies',
    src: 'images/Building-Adaptive-Brand-Strategies.jpg',
    alt: 'Adaptive Brand Strategies',
    date: '28 May 2025',
    title: 'The Death of Traditional Marketing: Building Adaptive Brand Strategies',
  },
  {
    id: 'ai-transforming-marketing',
    url: '/blog/ai-transforming-marketing',
    src: 'images/How-AI-is-Transforming-Marketing-.jpg',
    alt: 'AI in Marketing',
    date: '28 May 2025',
    title: 'How AI is Transforming Marketing: Beyond Buzzwords to Real Growth',
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
