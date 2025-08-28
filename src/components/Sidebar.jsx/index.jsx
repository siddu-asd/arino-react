import React from 'react'
import Div from '../Div'
import RecentPost from '../Widget/RecentPost'
import SearchWidget from '../Widget/SearchWidget'

export default function Sidebar() {

  const recentPostData = [
    {
      id: "ai-marketing-tools-2025",
      thumb: "/images/newaiblog.jpg",
      title: "AI in Marketing: Tools And Strategies For Smarter Campaigns in 2025",
      subtitle: "Artificial Intelligence(AI) has become an integral part of digital marketing. Leading marketers are using AI tools to boost their productivity, streamline their content creation process and drive personalisation across channels...",
      date: "july-2025",
      category: "AI Marketing",
      categoryHref: "/blog",
      href: "/blog/ai-marketing-tools-2025",
    },
    {
      id: "social-media-marketing-2025",
      thumb: "/images/SOCIAL1MEDIA.jpg",
      title: "Why Social Media Marketing Is Crucial in Today's Digital World (2025 Guide)",
      subtitle: "Discover why social media marketing is the secret weapon for unforgettable brands in 2025 and beyond...",
      date: "july-2025",
      category: "Marketing Trends",
      categoryHref: "/blog",
      href: "/blog/social-media-marketing-2025",
    },
    {
      id: "trends-2025",
      thumb: "/images/STORYTELLING.jpg",
      title: "The Importance of Storytelling in Branding: Why Every Great Brand Tells a Story ",
      subtitle: "Discover why storytelling is the secret weapon for unforgettable brands in 2025 and beyond...",
      date: "july-2025",
      category: "Marketing Trends",
      categoryHref: "/blog",
      href: "/blog/trends-2025",
    },
  {
    id: "marketing-trends-2025",
    thumb: "/images/Marketing-in-2025-The-Trends-Youre-Not-Ready-For.jpg",
    title: "Marketing Trends 2025: The Trends You're Not Ready For",
    subtitle: "Imagine a world where your marketing doesn't just speak—it connects directly with your customers. Explore AI-driven personalization, attention-grabbing videos, and more...",
    date: "july-2025",
    category: "Marketing Trends",
    categoryHref: "/blog",
    href: "/blog/marketing-trends-2025",
  },
  {
    id: "adaptive-brand-strategies",
    thumb: "/images/Marketing.png",
    title: "The Death of Traditional Marketing: Building Adaptive Brand Strategies",
    subtitle: "Traditional marketing is fading as consumer expectations evolve. Embracing AI, personalization, and immersive tech is essential to keep up...",
    date: "july-2025",
    category: "Digital Marketing",
    categoryHref: "/blog",
    href: "/blog/adaptive-brand-strategies",
  },
  {
    id: "ai-transforming-marketing",
    thumb:"/images/AI.png",
    title: "How AI is Transforming Marketing: Beyond Buzzwords to Real Growth",
    subtitle: "Artificial intelligence is revolutionizing marketing by shifting from reactive to predictive strategies, enabling personalization and real growth...",
    date: "july-2025",
    category: "AI Marketing",
    categoryHref: "/blog",
    href: "/blog/ai-transforming-marketing",
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
