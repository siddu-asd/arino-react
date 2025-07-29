import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
import { Link } from 'react-router-dom';
import '../Portfolio/portfolio.scss';

const servicesData = {
  'creative-marketing': {
    title: 'Creative Marketing',
    subtitle: 'Engaging campaigns that captivate and convert.',
    image: '/images/mj.png',
    description: 'What We Bring Through Creative Marketing ',
    // SEO Data
    seoTitle: 'Creative Marketing Page',
    seoDescription: 'Creative digital marketing services in Hyderabad. Every best and top advertising agency in Hyderabad is driven by creativity, detailed market research and knowledge of latest trends. Contact us for assistance.',
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
    // SEO Data
    seoTitle: 'Branding Page',
    seoDescription: 'Expert branding and designing solutions in Hyderabad. Premium branding services like logo designing, product packaging, marketing promotion materials like brochure, pamphlet, flyers etc are artistically made.',
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
    // SEO Data
    seoTitle: 'AI & Tech page',
    seoDescription: 'Artificial intelligence and technology services in Hyderabad. Website development, chatbot creation, and integration of artificial intelligence in websites. Contact for artificial intelligence and technology consultation.',
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
    // SEO Data
    seoTitle: 'Visual storytelling studio',
    seoDescription: 'Studio, podcast and photoshoot services in Hyderabad. Fully equipped studio with latest camera, mic for product photo/ video shoots and podcast shooting in Hyderabad. Contact us for a professional photoshoot today.',
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
      date: '10-Jan-2023',
      client: 'Client A',
    },
    {
      title: 'Website Mockup',
      src: '/images/nazaracm.jpg',
      category: 'marketing',
      date: '22-Feb-2023',
      client: 'Client B',
    },
    {
      title: 'AA Branding',
      src: '/images/CM.jpg',
      category: 'marketing',
      date: '05-May-2023',
      client: 'Client E',
    },
  ],
  'branding': [
    {
      title: 'Social Media Campaign',
      src: '/images/branding1.png',
      category: 'branding',
      date: '12-Jun-2023',
      client: 'Client F',
    },
    {
      title: 'Social Media Campaign 2',
      src: '/images/branding2.jpg',
      category: 'branding',
      date: '18-Jul-2023',
      client: 'Client G',
    },
    {
      title: 'AA Branding',
      src: '/images/branding4.jpg',
      category: 'branding',
      date: '10-Sep-2023',
      client: 'Client J',
    },
  ],
  'ai-technology': [
    {
      title: 'AI Robot',
      src: '/images/white-humanoid-robot-with-metallic-blue-accents-looking-directly-from-standing-front-abstract-digital-circle-that-displays-letters-ai.jpg',
      category: 'ai',
      date: '05-May-2023',
      client: 'Client K',
    },
    {
      title: 'AI Workspace',
      src: '/images/uiux.png',
      category: 'ai',
      date: '18-Jun-2023',
      client: 'Client L',
    },
    {
      title: 'AI Technology',
      src: '/images/bb2.jpg',
      category: 'ai',
      date: '10-Sep-2023',
      client: 'Client O',
    },
  ],
  'studio': [
    {
      title: 'Professional Photo Studio',
      src: '/images/studio1.jpg',
      category: 'studio',
      date: '12-Jul-2023',
      client: 'Client P',
    },
    {
      title: 'Pizza Website',
      src: '/images/studio2.jpg',
      category: 'studio',
      date: '25-Aug-2023',
      client: 'Client Q',
    },
    {
      title: 'AA Studio',
      src: '/images/studio3.jpg',
      category: 'studio',
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
  const { serviceDetailsId } = useParams();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [itemShow, setItemShow] = useState(7);

  const service = servicesData[serviceDetailsId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Set page title using your existing helper function
  useEffect(() => {
    if (service) {
      pageTitle(service.seoTitle);
    }
  }, [service]);

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

  // Section content for each service
  const whyChooseContent = {
    'creative-marketing': (
      <>
        All the best marketing agencies have some important factors that makes them different from the rest. At Raising 100x, we carve your brand, refine and position it in a way that makes it not a choice, but a preference.<br/><br/>
        From ideation of campaigns to tracking performance, we've got everything covered.<br/><br/>
        Every top marketing agency in India prioritises creativity, focusses on bringing the best out of your brand. Our creative team upgrade their skillset and knowledge with latest trends and algorithms and draft strategies that are ahead of the league.<br/><br/>
        As one of the best advertising agencies and top advertising agencies, we blend bold ideas with data-driven insights to craft campaigns that don't just grab attention—they spark action. Our marketing strategy & planning process is rooted in deep research, competitive analysis, and a relentless pursuit of what makes your brand truly unique.
      </>
    ),
    'branding': (
      <>
        Whether you're launching a new product, refreshing your brand logo, or building your personal brand, our team crafts strategies and visuals that build trust and recognition. We don't just design logos—we create icons that stand for something bigger.<br/><br/>
        Branding and packaging are what makes a product distinguish from other. As a leading branding agency, we offer end-to-end branding services that cover everything from brand name & tagline creation to brand identity, business logo design, and packaging.<br/><br/>
        From color palettes and typography to iconography and tone of voice, every detail is meticulously designed to reflect your brand's personality and connect with your audience. Our logo designers and branding strategists work hand-in-hand to ensure your brand identity is both timeless and trendsetting.
      </>
    ),
    'ai-technology': (
      <>
        AI and Technology services at Raising 100x, harness the power of artificial intelligence to supercharge your brand's growth. From AI-powered chatbots that deliver instant customer support to workflow automation that streamlines your operations, we make technology work for you.<br/><br/>
        Need an artificial intelligence website or want to explore in-store AR/VR experiences? Our AI technolgy experts design seamless, innovative solutions that put you miles ahead of the competition. With AI and technology at your fingertips, your brand is ready for tomorrow—today.<br/><br/>
        With our expert website and app development team, build digital experiences that wow everyone.
      </>
    ),
    'studio': (
      <>
        Raising 100x Studio—the creative playground where ideas come alive. Our visual storytelling studio is more than a space; it's an experience.<br/><br/>
        From the best podcasts and video podcast production to cinematic ad-films, product photoshoots, and video shooting, we bring your vision to life with flair and precision.<br/><br/>
        Need a storytelling studio or studio space that inspires? Our team delivers scroll-stopping visuals and audio that make your brand the talk of the town.<br/><br/>
        Raising 100x is where creative marketing meets AI and technology, branding becomes iconic, and every story finds its stage in our visual storytelling studio. Let's raise your brand 100x—together.
      </>
    ),
  };

  // Service-specific heading for the why-choose section
  const whyChooseHeading = {
    'creative-marketing': 'Why Choose Raising 100x for Creative Marketing?',
    'branding': 'Why Choose Raising 100x for Branding?',
    'ai-technology': 'Why Choose Raising 100x for AI & Technology?',
    'studio': 'Why Choose Raising 100x for Visual Storytelling Studio?',
  }[serviceDetailsId] || 'Why Choose Raising 100x?';

  if (!service) {
    return (
      <Div className="container text-center">
        <Helmet>
          <title>Service not found</title>
          <meta name="description" content="The requested service page could not be found." />
        </Helmet>
        <Spacing lg="100" md="50" />
        <h2>Service not found</h2>
        <Spacing lg="100" md="50" />
      </Div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.seoTitle}</title>
        <meta name="description" content={service.seoDescription} />
      </Helmet>
    
      <style>{`
        @media (max-width: 991px) {
          .d-block.d-lg-none {
            display: none !important;
          }
        }
      `}</style>
      {/* <Div className="d-block d-lg-none">
        <PageHeading
          title="What We Offer"
          bgSrc="/images/blog_hero_bg.jpeg"
          pageLinkText="What We Offer"
        />
      </Div> */}

      <Div style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <Spacing lg="145" md="80" />
        <Div className="container" style={{marginTop: '100px'}}>
          <SectionHeading
            title={service.title}
            subtitle={service.subtitle}
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
                <img src={service.image} alt={service.title} className="cs-radius_15 w-100" loading="lazy" />
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
{/* 
        <Spacing lg="120" md="50" /> */}
           {/* New Why Choose section */}
           {/* This section is now handled within the service details page */}
                    {/* New Why Choose section, content varies by service */}
          <Div className="why-choose-section" style={{margin: '0px auto 30px auto', maxWidth: 900, borderRadius: 16, padding: '40px 32px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', }}>
            <SectionHeading
              title={whyChooseHeading}
              subtitle=""
              variant="cs-style1 text-center"
            />
            <div style={{fontSize: '18px', color: '#fff', lineHeight: 1.6, margin: '32px auto 0 auto', textAlign: '-webkit-auto', maxWidth: 900}}>
              {whyChooseContent[serviceDetailsId]}
            </div>
          </Div>
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
                    // subtitle={`${item.location} • ${item.software}`}
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
                    title: " Branding-1"
                  },
                  {
                    image: "/images/c2.jpg",
                    pdf: "/downloads/brandingDemo2.pdf",
                    title: "Branding-2"
                  },
                  {
                    image: "/images/c3.jpg",
                     pdf: "/downloads/brandingDemo3.pdf",
                    title: "Branding-3"
                  },
                  {
                    image: "/images/raising100x.jpg",
                    pdf: "/downloads/Raising100x.pdf",
                    title: "Branding-4"
                  },
                  {
                    image: "/images/c6.jpg",
                    pdf: "/downloads/brandingDemo6.pdf",
                    title: "Branding-5"
                  },
                  {
                    image: "/images/c8.jpg",
                    pdf: "/downloads/brandingDemo8.pdf",
                    title: "Branding - 6"
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
                 loading="lazy"
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