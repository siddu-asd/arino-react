import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import Portfolio from '../Portfolio';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

const portfolioData = [
  
  {
    title: 'Logo Design',
    subtitle: 'See Details',
    src: '/images/logo mockup jpeg.jpg',
    category: 'logo_design',

    location: 'United Kingdom',
    software: 'Adobe Illustrator',
    date: '14-Aug-2022',
    client: 'Andreo Bowla',
  },
  {
    title: 'OAK Hospitals',
    subtitle: 'See Details',
    src: '/images/banner mock up 1.png',
    category: 'web_design',

    location: 'Hyderabad',
    software: 'React Project',
    date: '31-March-2025',
    client: 'Dr. Nagarjuna',
  },
  {
    title: '2',
    subtitle: 'See Details',
    src: '/images/standee mockup 3 png.png',
    category: 'web_design',

    location: 'Hyderabad',
    software: 'React Project',
    date: '31-March-2025',
    client: 'Dr. Nagarjuna',
  },
   {
    title: '2',
    subtitle: 'See Details',
    src: '/images/flyer mockup 2.png',
    category: 'web_design',

    location: 'Hyderabad',
    software: 'React Project',
    date: '31-March-2025',
    client: 'Dr. Nagarjuna',
  },
   {
    title: '6',
    subtitle: 'See Details',
    src: '/images/logo mockup 2.png',
    category: 'web_design',

    location: 'Hyderabad',
    software: 'React Project',
    date: '31-March-2025',
    client: 'Dr. Nagarjuna',
  },

  {
    title: 'Social Media NAZARA',
    subtitle: 'See Details',
    src: '/images/SOCIAL MEDIA MOCKUP.jpg',
    category: 'branding_company',

    location: 'United Kingdom',
    software: 'Adobe Illustrator',
    date: '14-Aug-2022',
    client: 'Andreo Bowla',
  },
  {
    title: 'Dr. Nagarjuna website',
    subtitle: 'See Details',
    src: '/images/website mockup 1 png.png',
    category: 'web_design',

    location: 'Hyderabad',
    software: 'React Project',
    date: '31-March-2025',
    client: 'Dr. Nagarjuna',
  },


];

const categoryMenu = [
  { title: 'Web UI/UX', category: 'web_design' },
  { title: 'Branding', category: 'branding_company' },
  { title: 'Mobile Apps', category: 'mobile_apps' },
  { title: 'Logo', category: 'logo_design' },
];

export const portfolioItems = portfolioData;

export default function PortfolioPage() {
  pageTitle('Portfolio');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  const navigate = useNavigate();

  const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Our Creation"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Our Creation"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Work That Impressed Our Clients  " subtitle="Behold Our Creation " />
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
              onClick={() => navigate(`/portfolio/${slugify(item.title)}`)}
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
          title="Have an idea? <br /> We’ve got you!  
     Let’s talk over a cup of coffee... "
          btnText="YES I'M IN!"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
