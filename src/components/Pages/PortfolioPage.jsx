import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import Div from '../Div';
import Portfolio from '../Portfolio';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import PageHeading from '../PageHeading';
const portfolioData = [
  // Web UI/UX
  {
    title: 'UI/UX Interface',
    src: '/images/uiux.png',
    category: 'web_design',
    location: 'Hyderabad',
    software: 'React Project',
    date: '31-March-2025',
    client: 'Dr. Nagarjuna',
  },
  {
    title: 'Web Designing',
    src: '/images/webuiux.jpg',
    category: 'web_design',
    location: 'Hyderabad',
    software: 'React Project',
    date: '31-March-2025',
    client: 'Dr. Nagarjuna',
  },
  {
    title: 'Studio Designing Interface',
    src: '/images/ls.jpg',
    category: 'Studio Designing Interface',
    location: 'Hyderabad',
    software: 'React Project',
    date: '31-March-2025',
    client: 'Dr. Nagarjuna',
  },
  {
    title: 'Website Designing for Cafe',
    src: '/images/pizza.jpg',
    category: 'web_design',
    location: 'Hyderabad',
    software: 'React Project',
    date: '31-March-2025',
    client: 'Dr. Nagarjuna',
  },
  
  // Branding
  {
    title: 'Branding',
    src: '/images/branding4.jpg',
    category: 'logo_design',
    location: 'United Kingdom',
    software: 'Adobe Illustrator',
    date: '14-Aug-2022',
    client: 'Andreo Bowla',
  },
  {
    title: 'Marketing Materials',
    src: '/images/branding1.png',
    category: 'branding_company',
    location: 'United Kingdom',
    software: 'Adobe Illustrator',
    date: '14-Aug-2022',
    client: 'Andreo Bowla',
  },
  {
    title: 'Branding & Promotional Posters',
    src: '/images/branding2.jpg',
    category: 'branding_company',
    location: 'Hyderabad',
    software: 'React Project',
    date: '31-March-2025',
    client: 'Dr. Nagarjuna',
  },
  // Creatives
  {
    title: 'Social Media Creatives',
    src: '/images/CM.jpg',
    category: 'creatives',
    location: 'Mumbai',
    software: 'Photoshop',
    date: '10-Jan-2023',
    client: 'Client X',
  },
    {
    title: 'Out-of-home Advertising',
    src: '/images/nazaracm.jpg',
    category: 'creatives',
    location: 'Delhi',
    software: 'Illustrator',
    date: '22-Feb-2023',
    client: 'Client Y',
  },
  {
    title: 'Personalized Social Media Designing',
    src: '/images/socialMedia.jpg',
    category: 'creatives',
    location: 'Delhi',
    software: 'Illustrator',
    date: '22-Feb-2023',
    client: 'Client Y',
  },
 
];

const categoryMenu = [
  { title: 'Web UI/UX', category: 'web_design' },
  { title: 'Branding', category: 'branding_company' },
  { title: 'Creatives', category: 'creatives' },
];

export const portfolioItems = portfolioData;

export default function PortfolioPage() {
  pageTitle('Portfolio');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(portfolioData.length);
  const navigate = useNavigate();

  const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="responsive-page-heading">
        <PageHeading
          title="Our Creations"
          bgSrc="/images/blog_hero_bg.jpeg"
          pageLinkText="Creations"
        />
      </div>
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Unique designs we can craft just for you!  " subtitle="Behold Our Creation " />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
                } ${active === 'all'
                  ? ''
                  : !(active === item.category)
                    ? 'd-none'
                    : ''
                }`}
              key={index}
              style={{ cursor: 'pointer' }}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href="#"
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>
        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />

      <Div className="container">
        <Cta
          title="Have an idea? <br /> We've got you!  
     Let's talk over a cup of coffee... "
          btnText="YES I'M IN!"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
