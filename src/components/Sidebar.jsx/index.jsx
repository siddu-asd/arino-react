import React from 'react'
import Div from '../Div'
import AuthorWidget from '../Widget/AuthorWidget'
import RecentPost from '../Widget/RecentPost'
import SearchWidget from '../Widget/SearchWidget'
import SideMenuWidget from '../Widget/SideMenuWidget'
import TagWidget from '../Widget/TagWidget'

export default function Sidebar() {
  const tagData = [
    {
      title: 'Business',
      url:'/'
    },
    {
      title: 'Agency',
      url:'/'
    },
    {
      title: 'Artwork',
      url:'/'
    },
    {
      title: 'Marketing',
      url:'/'
    },
    {
      title: 'Information',
      url:'/'
    },
    {
      title: 'Design',
      url:'/'
    },
    {
      title: 'Wordpress',
      url:'/'
    },
  ]
  const archiveData = [
    {
      title: 'Archives',
      url:'/'
    },
    {
      title: '15 Aug 2022',
      url:'/'
    },
    {
      title: '20 Sep 2021',
      url:'/'
    },
    {
      title: '11 Dec 2020',
      url:'/'
    },
    {
      title: '25 jun 2020',
      url:'/'
    }
  ]
  const categoryData = [
    {
      title: 'Corporate',
      url:'/'
    },
    {
      title: 'Company',
      url:'/'
    },
    {
      title: 'Search Engine',
      url:'/'
    },
    {
      title: 'Information',
      url:'/'
    },
    {
      title: 'Painting',
      url:'/'
    }
  ]
  const recentPostData = [
  {
    id: "marketing-trends-2025",
    thumb: "/images/Marketing-in-2025-The-Trends-Youre-Not-Ready-For.jpg",
    title: "Marketing Trends 2025: The Trends You’re Not Ready For",
    subtitle: "Imagine a world where your marketing doesn’t just speak—it connects directly with your customers. Explore AI-driven personalization, attention-grabbing videos, and more...",
    date: "2025-05-28",
    category: "Marketing Trends",
    categoryHref: "/blog",
    href: "/blog/marketing-trends-2025",
  },
  {
    id: "adaptive-brand-strategies",
    thumb: "/images/Building-Adaptive-Brand-Strategies.jpg",
    title: "The Death of Traditional Marketing: Building Adaptive Brand Strategies",
    subtitle: "Traditional marketing is fading as consumer expectations evolve. Embracing AI, personalization, and immersive tech is essential to keep up...",
    date: "2025-05-28",
    category: "Digital Marketing",
    categoryHref: "/blog",
    href: "/blog/adaptive-brand-strategies",
  },
  {
    id: "ai-transforming-marketing",
    thumb: "/images/How-AI-is-Transforming-Marketing-.jpg",
    title: "How AI is Transforming Marketing: Beyond Buzzwords to Real Growth",
    subtitle: "Artificial intelligence is revolutionizing marketing by shifting from reactive to predictive strategies, enabling personalization and real growth...",
    date: "2025-05-28",
    category: "AI Marketing",
    categoryHref: "/blog",
    href: "/blog/ai-transforming-marketing",
  }
];

  return (
    <>
      <Div className="cs-sidebar_item">
        <AuthorWidget 
          src='/images/avatar_1.png'
          name='Kuber Jontra' 
          description='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.'
        />
      </Div>
      <Div className="cs-sidebar_item">
        <SearchWidget title='Search'/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Categories' data={categoryData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <RecentPost title='Archives' data={recentPostData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Archives' data={archiveData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <TagWidget title='Tags' data={tagData}/>
      </Div>
    </>
  )
}
