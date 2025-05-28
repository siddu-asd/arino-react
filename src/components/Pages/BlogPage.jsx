import { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Pagination from '../Pagination';
import PostStyle2 from '../Post/PostStyle2';
import Div from '../Div';
import Sidebar from '../Sidebar.jsx';
import Spacing from '../Spacing';

export const postData = [
  {
    id: "marketing-trends-2025",
    thumb: "images/Marketing-in-2025-The-Trends-Youre-Not-Ready-For.jpg",
    title: "Marketing Trends 2025: The Trends You’re Not Ready For",
    subtitle: "Imagine a world where your marketing doesn’t just speak—it connects directly with your customers. Explore AI-driven personalization, attention-grabbing videos, and more...",
    date: "2025-05-28",
    category: "Marketing Trends",
    categoryHref: "/blog",
    href: "/blog/marketing-trends-2025",
  },
  {
    id: "adaptive-brand-strategies",
    thumb: "images/Building-Adaptive-Brand-Strategies.jpg",
    title: "The Death of Traditional Marketing: Building Adaptive Brand Strategies",
    subtitle: "Traditional marketing is fading as consumer expectations evolve. Embracing AI, personalization, and immersive tech is essential to keep up...",
    date: "2025-05-28",
    category: "Digital Marketing",
    categoryHref: "/blog",
    href: "/blog/adaptive-brand-strategies",
  },
  {
    id: "ai-transforming-marketing",
    thumb: "images/How-AI-is-Transforming-Marketing-.jpg",
    title: "How AI is Transforming Marketing: Beyond Buzzwords to Real Growth",
    subtitle: "Artificial intelligence is revolutionizing marketing by shifting from reactive to predictive strategies, enabling personalization and real growth...",
    date: "2025-05-28",
    category: "AI Marketing",
    categoryHref: "/blog",
    href: "/blog/ai-transforming-marketing",
  }
];

export default function BlogPage() {
  pageTitle('Blog');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Our Blogs"
        bgSrc="/images/blog_hero_bg.jpeg"
        pageLinkText="Blogs"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index) => (
              <Div key={item.id}>
                <PostStyle2
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {postData.length > index + 1 && <Spacing lg="95" md="60" />}
              </Div>
            ))}
            <Spacing lg="60" md="40" />
            <Pagination />
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg="0" md="80" />
            <Sidebar />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Have an idea? <br /> We’ve got you! Let’s talk over a cup of coffee..."
          btnText="YES I'M IN!"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
