import React from 'react'
import Div from '../Div'
import RecentPost from '../Widget/RecentPost'
import SearchWidget from '../Widget/SearchWidget'

export default function Sidebar() {

  const recentPostData = [
  {
    id: "marketing-trends-2025",
    thumb: "/images/Marketing-in-2025-The-Trends-Youre-Not-Ready-For.jpg",
    title: "Marketing Trends 2025: The Trends You're Not Ready For",
    subtitle: "Imagine a world where your marketing doesn't just speak—it connects directly with your customers. Explore AI-driven personalization, attention-grabbing videos, and more...",
    date: "2025-05-28",
    category: "Marketing Trends",
    categoryHref: "/blog",
    href: "/blog/marketing-trends-2025",
  },
  {
    id: "adaptive-brand-strategies",
    thumb: "/images/Marketing.png",
    title: "The Death of Traditional Marketing: Building Adaptive Brand Strategies",
    subtitle: "Traditional marketing is fading as consumer expectations evolve. Embracing AI, personalization, and immersive tech is essential to keep up...",
    date: "2025-05-28",
    category: "Digital Marketing",
    categoryHref: "/blog",
    href: "/blog/adaptive-brand-strategies",
  },
  {
    id: "ai-transforming-marketing",
    thumb:"/images/AI.png",
    title: "How AI is Transforming Marketing: Beyond Buzzwords to Real Growth",
    subtitle: "Artificial intelligence is revolutionizing marketing by shifting from reactive to predictive strategies, enabling personalization and real growth...",
    date: "2025-05-28",
    category: "AI Marketing",
    categoryHref: "/blog",
    href: "/blog/ai-transforming-marketing",
  },
  {
    id: "trends-2025",
    thumb: "/images/SOCIAL1MEDIA.jpg",
    title: "The Importance of Storytelling in Branding: Why Every Great Brand Tells a Story ",
    subtitle: "Discover why storytelling is the secret weapon for unforgettable brands in 2025 and beyond...",
    date: "2025-07-04",
    category: "Marketing Trends",
    categoryHref: "/blog",
    href: "/blog/trends-2025",
  },
];

  return (
    <>
     
      <Div className="cs-sidebar_item">
        <SearchWidget title='Search'/>
      </Div>
    
      <Div className="cs-sidebar_item">
        <RecentPost title='Archives' data={recentPostData}/>
      </Div>
     
    </>
  )
}
