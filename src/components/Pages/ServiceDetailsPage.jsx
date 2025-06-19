import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pageTitle } from '../../helper';
import Button from '../Button';
import Cta from '../Cta';
import IconBox from '../IconBox';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TestimonialSlider from '../Slider/TestimonialSlider';
import Spacing from '../Spacing';
import Portfolio from '../Portfolio';
import { Icon } from '@iconify/react';
import PageHeading from '../PageHeading';
import { Link } from 'react-router-dom';
import '../Portfolio/portfolio.scss';

const servicesData = {
  'creative-marketing': {
    title: 'Creative Marketing',
    subtitle: 'Engaging campaigns that captivate and convert.',
    image: '/images/mj.png',
    description: 'What We Bring Through Creative Marketing ',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'PICTURE', description: 'We Picture Our Thoughts ' },
      { icon: '/images/icons/service_icon_2.svg', title: 'PLOT', description: 'We Plot Our Ideas ' },
      { icon: '/images/icons/service_icon_3.svg', title: 'PRESENT', description: 'We Present Our Creation' }
    ],
    relatedServices: [
      'Marketing Strategy & Planning',
      'Digital Marketing & Analysis',
      'Content Creation',
      'Social Media Marketing'
    ]
  },
  'branding': {
    title: 'Branding',
    subtitle: 'Build a bold and memorable brand identity.',
    image: '/images/ge.png',
    description: 'What We Bring Through Branding',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'PICTURE', description: 'We Picture Our Thoughts' },
      { icon: '/images/icons/service_icon_2.svg', title: 'PLOT', description: 'We Plot Our Ideas' },
      { icon: '/images/icons/service_icon_3.svg', title: 'PRESENT', description: 'We Present Our Creation' }
    ],
    relatedServices: [
      'Brand Name and Tagline  ',
      'Brand Identity ',
      'Product & Service Branding ',
      'Personal Branding  ',
    ]
  },
  'ai-technology': {
    title: 'AI & Technology',
    subtitle: 'Empowering businesses with smart tech solutions.',
    image: '/images/gt.png',
    description: 'What We Bring Through AI & Technology ',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'PICTURE', description: 'We Picture Our Thoughts' },
      { icon: '/images/icons/service_icon_2.svg', title: 'PLOT', description: 'We Plot Our Ideas' },
      { icon: '/images/icons/service_icon_3.svg', title: 'PRESENT', description: 'We Present Our Creation' }
    ],
    relatedServices: [
      'Website & App Development',
      'AI Powered Chatbots  ',
      ' In Store AR/VR  ',
      'Workflow Automation '
    ]
  },
  'studio': {
    title: '  Visual Storytelling Studio',
    subtitle: 'Professional studio production for audio and visuals.',
    image: '/images/19s.jpeg',
    description: 'What We Bring Through Visual Storytelling Studio',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'PICTURE', description: 'We Picture Our Thoughts' },
      { icon: '/images/icons/service_icon_2.svg', title: 'PLOT', description: 'We Plot Our Ideas' },
      { icon: '/images/icons/service_icon_3.svg', title: 'PRESENT', description: 'We Present Our Creation' }
    ],
    relatedServices: [
      'Podcast ',
      'Product Photo Shoot',
      'Ad-Film ',
      'Video Shooting'
    ]
  }
};

const portfolioDataByService = {
  'creative-marketing': [
    {
      title: 'UI/UX Interface ',
      src: '/images/socialMedia.jpg',
      category: 'marketing',
      location: 'New York',
      software: 'Figma',
      date: '10-Jan-2023',
      client: 'Client A',
    },
    {
      title: 'Website Mockup',
      src: '/images/nazaracm.jpg',
      category: 'marketing',
      location: 'London',
      software: 'Photoshop',
      date: '22-Feb-2023',
      client: 'Client B',
    },
    {
      title: 'AA Branding',
      src: '/images/CM.jpg',
      category: 'marketing',
      location: 'Madrid',
      software: 'Illustrator',
      date: '05-May-2023',
      client: 'Client E',
    },
  ],
  'branding': [
    {
      title: 'Social Media Campaign',
      src: '/images/branding1.png',
      category: 'branding',
      location: 'London',
      software: 'Photoshop',
      date: '12-Jun-2023',
      client: 'Client F',
    },
    {
      title: 'Social Media Campaign 2',
      src: '/images/branding2.jpg',
      category: 'branding',
      location: 'Berlin',
      software: 'Illustrator',
      date: '18-Jul-2023',
      client: 'Client G',
    },
    {
      title: 'AA Branding',
      src: '/images/branding4.jpg',
      category: 'branding',
      location: 'Madrid',
      software: 'Illustrator',
      date: '10-Sep-2023',
      client: 'Client J',
    },
  ],
  'ai-technology': [
    {
      title: 'AI Robot',
      src: '/images/white-humanoid-robot-with-metallic-blue-accents-looking-directly-from-standing-front-abstract-digital-circle-that-displays-letters-ai.jpg',
      category: 'ai',
      location: 'San Francisco',
      software: 'TensorFlow',
      date: '05-May-2023',
      client: 'Client K',
    },
    {
      title: 'AI Workspace',
      src: '/images/uiux.png',
      category: 'ai',
      location: 'Tokyo',
      software: 'PyTorch',
      date: '18-Jun-2023',
      client: 'Client L',
    },
    {
      title: 'AI Technology',
      src: '/images/bb2.jpg',
      category: 'ai',
      location: 'Paris',
      software: 'Scikit-learn',
      date: '10-Sep-2023',
      client: 'Client O',
    },
  ],
  'studio': [
    {
      title: 'Professional Photo Studio',
      src: '/images/studio1.jpg',
      category: 'studio',
      location: 'Mumbai',
      software: 'Premiere Pro',
      date: '12-Jul-2023',
      client: 'Client P',
    },
    {
      title: 'Pizza Website',
      src: '/images/studio2.jpg',
      category: 'studio',
      location: 'Sydney',
      software: 'Final Cut',
      date: '25-Aug-2023',
      client: 'Client Q',
    },
    {
      title: 'AA Studio',
      src: '/images/studio3.jpg',
      category: 'studio',
      location: 'Paris',
      software: 'Illustrator',
      date: '18-Sep-2023',
      client: 'Client T',
    },
  ],
};

// Optional future use (filtering tabs etc.)
const categoryMenu = [
  { title: 'Web UI/UX', category: 'web_design' },
  { title: 'Branding', category: 'branding_company' },
  { title: 'Mobile Apps', category: 'mobile_apps' },
  { title: 'Logo', category: 'logo_design' },
];

export default function ServiceDetailsPage() {
  pageTitle('Service Details');
  const { serviceDetailsId } = useParams();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const service = servicesData[serviceDetailsId];
  const [itemShow, setItemShow] = useState(7);

  const portfolioHeadings = {
    'creative-marketing': 'Creative Marketing Portfolio',
    'branding': 'Branding Portfolio',
    'ai-technology': 'AI & Technology Portfolio',
    'studio': 'Visual Storytelling Portfolio',
  };

  const portfolioHeading = portfolioHeadings[serviceDetailsId] || 'Our Portfolio';
  const portfolioData = portfolioDataByService[serviceDetailsId] || [];

  // Handle hover for mobile devices
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  if (!service) {
    return (
      <Div className="container text-center">
        <Spacing lg="100" md="50" />
        <h2>Service not found</h2>
        <Spacing lg="100" md="50" />
      </Div>
    );
  }

  return (
    <>
      <Div className="d-block d-lg-none">
        <PageHeading
          title="What We Offer"
          bgSrc="/images/blog_hero_bg.jpeg"
          pageLinkText="What We Offer"
        />
      </Div>

      <Div style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Our Design Adventure Begins With"
            subtitle={service.title}
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            {service.process.map((step, index) => (
              <Div className="col-lg-4" key={index}>
                <IconBox
                  icon={step.icon}
                  title={step.title}
                  subtitle={step.description}
                />
                <Spacing lg="30" md="30" />
              </Div>
            ))}
          </Div>
        </Div>

        <Spacing lg="120" md="50" />
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img src={service.image} alt={service.title} className="cs-radius_15 w-100" />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <h2 className="cs-font_50 cs-m0">
                {service.description.replace(/\w\S*/g, (txt) =>
                  txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
                )}
              </h2>
              <Spacing lg="50" md="30" />
              <Div className="row">
                {service.relatedServices.map((s, idx) => (
                  <Div className="col-lg-6" key={idx}>
                    <Button
                      btnLink={`/service/${serviceDetailsId}`}
                      btnText={s}
                      variant="cs-type2"
                    />
                    <Spacing lg="20" md="10" />
                  </Div>
                ))}
              </Div>
            </Div>
          </Div>
        </Div>

        <Spacing lg="120" md="50" />
        <Div className="container">
          <SectionHeading
            title={portfolioHeading}
            subtitle=""
            variant="cs-style1 text-center"
          />
          <Spacing lg="50" md="25" />
          <Div className="row">
            {portfolioData.length === 0 ? (
              <Div className="col-12 text-center">
                <p>No portfolio items available for this service.</p>
              </Div>
            ) : (
              portfolioData.slice(0, itemShow).map((item, index) => (
                <Div
                  className={index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'}
                  key={index}
                >
                  <Portfolio
                    title={item.title}
                    subtitle={`${item.location} • ${item.software}`}
                    href="#"
                    src={item.src}
                    variant="cs-style1 cs-type1"
                  />
                  <Spacing lg="25" md="25" />
                </Div>
              ))
            )}
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

        {serviceDetailsId === 'branding' && (
          <>
            <Spacing lg="100" md="70" />
             <SectionHeading
            title="OUR BRANDING SAMPLES"
            subtitle=""
            variant="cs-style1 text-center"
          />
           <Spacing lg="90" md="45" />
            <Div className="container">
              <Div className="row">
                {[
                  {
                    image: "/images/c1.jpg",
                    pdf: "/downloads/brandingDemo1.pdf",
                    title: "Latest Branding"
                  },
                  {
                    image: "/images/c2.jpg",
                    pdf: "/downloads/brandingDemo2.pdf",
                    title: "Branding"
                  },
                  {
                    image: "/images/c3.jpg",
                     pdf: "/downloads/brandingDemo3.pdf",
                    title: "Branding Design"
                  },
                  {
                    image: "/images/raising100x.jpg",
                    pdf: "/downloads/Raising100x.pdf",
                    title: "Branding"
                  },
                  {
                    image: "/images/c6.jpg",
                    pdf: "/downloads/brandingDemo6.pdf",
                    title: "Design"
                  },
                  {
                    image: "/images/c8.jpg",
                    pdf: "/downloads/brandingDemo8.pdf",
                    title: "Branding Design"
                  },
                ].map((item, index) => (
                  <Div className="col-lg-4" key={index}>
                    <Link
                      to="#"
                      className={`cs-portfolio cs-bg cs-style1 branding-portfolio ${hoveredIndex === index ? 'hovered' : ''}`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Div className="cs-portfolio_hover" />
                      <Div
                      className="cs-portfolio_bg cs-bg"
                  style={{
                  height: '260px',
                  width: '100%',
                  overflow: 'hidden',
                  display: 'flex',
                 alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: '10px'
                  }}
                  >
                 <img
                   src={item.image}
                    alt={item.title}
                   style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                objectFit: 'contain'
                }}
                 />
              </Div>
                      <Div className="cs-portfolio_info">
                        <Div className="cs-portfolio_info_bg cs-accent_bg" />
                        <h2 className="cs-portfolio_title">{item.title}</h2>
                        <Div className="cs-portfolio_actions">
                          <a 
                            href={item.pdf}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="cs-portfolio_action-btn preview-btn"
                            onClick={(e) => e.stopPropagation()}
                        
                          >
                            <Icon icon="mdi:eye" />
                          </a>
                          <a 
                            href={item.pdf}
                            download 
                            className="cs-portfolio_action-btn download-btn"
                            onClick={(e) => e.stopPropagation()}
                          
                          >
                            <Icon icon="mdi:download" />
                          </a>
                        </Div>
                      </Div>
                    </Link>
                    <Spacing lg="4" md="25" />
                  </Div>
                ))}
              </Div>
            </Div>
          </>
        )}

        
        <TestimonialSlider />
        <Spacing lg="145" md="80" />
        <Div className="container cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="Have an idea? <br /> We've got you!  
       Let's talk over a cup of coffee... "
            btnText="YES I'M IN!"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Div>
    </>
  );
}

