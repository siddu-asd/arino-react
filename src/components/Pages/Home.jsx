import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Card from '../Card';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import PortfolioSlider from '../Slider/PortfolioSlider';
import PostSlider from '../Slider/PostSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import VideoModal from '../VideoModal';
import { pageTitle } from '../../helper';
import { Icon } from '@iconify/react';
 
const heroSocialLinks = [
  { name: 'Behance', links: '/' },
  { name: 'Twitter', links: '/' },
];
 
 
const portfolioData = [
 
  {
    title: 'Logo Design',
    src: '/images/logo mockup jpeg.jpg',
    category: 'logo_design',
 
    location: 'United Kingdom',
    software: 'Adobe Illustrator',
    date: '14-Aug-2022',
    client: 'Andreo Bowla',
  },
  // {
  //   title: 'OAK Hospitals',
  //   subtitle: 'See Details',
  //   src: '/images/banner mock up 1.png',
  //   category: 'web_design',
 
  //   location: 'Hyderabad',
  //   software: 'React Project',
  //   date: '31-March-2025',
  //   client: 'Dr. Nagarjuna',
  // },
  {
    title: 'Marketing Materials',
    src: '/images/branding1.png',
    category: 'web_design',
 
    location: 'Hyderabad',
    software: 'React Project',
    date: '31-March-2025',
    client: 'Dr. Nagarjuna',
  },
  {
    title: 'Out-of-home Advertising',
    src: '/images/nazaracm.jpg',
    category: 'web_design',
 
    location: 'Hyderabad',
    software: 'React Project',
    date: '31-March-2025',
    client: 'Dr. Nagarjuna',
  },
  {
    title: 'Studio Designing Interface',
    src: '/images/ls.jpg',
 
    location: 'Hyderabad',
    software: 'React Project',
    date: '31-March-2025',
    client: 'Dr. Nagarjuna',
  },
 
  {
    title: 'Professional Photo Studio',
    src: '/images/studio1.jpg',
    category: 'branding_company',
 
    location: 'United Kingdom',
    software: 'Adobe Illustrator',
    date: '14-Aug-2022',
    client: 'Andreo Bowla',
  },
  {
    title: 'UI/UX Interface ',
    src: '/images/socialMedia.jpg',
    category: 'web_design',
 
    location: 'Hyderabad',
    software: 'React Project',
    date: '31-March-2025',
    client: 'Dr. Nagarjuna',
  },
 
];
 
export default function Home() {
  pageTitle('Home');
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <>
    <Helmet>
        <title>Best in Creativity - Digital Marketing Agency in Hyderabad</title>
        <meta
          name="description"
          content="Raising 100x is one of the best marketing and advertising agencies in Hyderabad. Planning campaigns, social media management, website development, we do it all"
        />
      </Helmet>
      <style>{`
@keyframes bounceDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}
.service-down-arrow-btn {
  background: rgba(238, 225, 225, 0.64) !important;
  backdrop-filter: blur(4px) !important;
  animation: bounceDown 0.9s infinite;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
 
}
.service-down-arrow-btn:hover {
  background:rgb(201, 17, 17) !important;
  color: #fff !important;
  box-shadow: 0 8px 24px rgba(179,10,10,0.18) !important;
  animation-play-state: paused !important;
}
`}</style>
      <Hero
        title={`We don't just do<br />
 <span id="wonder-text">WONDERS</span>
 <br />
  we make your brand<br />
  <span id="wonder-text">WONDERFUL</span>`
        }
        btnText="LET'S START"
        btnLink="/contact"  
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
         bgImageUrl="/images/hero_bg.jpeg"
        // bgImageUrl="/images/rotateHero_bg.jpeg"
      />
 
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Setting the Bar 100 Times Higher"
        />
      </div>
 
      {/* New Section - About Agency */}
      <Spacing lg="100" md="0" />
      <Div
        className="container"
        style={{
          backgroundImage: `url('/images/hero_bg.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '60px 20px',
          borderRadius: '10px',
          position: 'relative'
        }}
      >
        {/* Overlay for better text readability */}
        <Div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '10px',
            zIndex: 1
          }}
        />
       
        
      </Div>
 
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="We Uplift Your Brand By  "
                subtitle=""
                btnText="Our Capabilities"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            {/* Updated services layout with spacing columns */}
            <Div className='col-xl-8'>
              <Div className='row'>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6 mb-4 mb-sm-4'>
                  <div style={{position: 'relative'}}>
                    <Card
                      link='/service/creative-marketing'
                      src='/images/nhj.png'
                      alt='Creative Marketing'
                      style={{
                        '&:hover .cs-card_title': {
                          opacity: 0
                        }
                      }}
                    />
                    {/* Down Arrow Button */}
                    <a
                      href='/service/creative-marketing'
                      className='service-down-arrow-btn'
                      style={{
                        position: 'absolute',
                        left: '50%',
                        bottom: '12px',
                        transform: 'translateX(-50%)',
                        borderRadius: '50%',
                        width: '34px',
                        height: '34px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        zIndex: 2,
                        transition: 'box-shadow 0.3s, background 0.3s',
                        fontSize: '1.5rem',
                        color: '#b30a0a',
                        cursor: 'pointer',
                      }}
                    >
                      <Icon icon='mdi:chevron-down' />
                    </a>
                  </div>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6 mb-4 mb-sm-4'>
                  <div style={{position: 'relative'}}>
                    <Card
                      link='/service/branding'
                      src='/images/ge.png'
                      alt='Branding'
                      style={{
                        '&:hover .cs-card_title': {
                          opacity: 0
                        }
                      }}
                    />
                    <a
                      href='/service/branding'
                      className='service-down-arrow-btn'
                      style={{
                        position: 'absolute',
                        left: '50%',
                        bottom: '12px',
                        transform: 'translateX(-50%)',
                        borderRadius: '50%',
                        width: '34px',
                        height: '34px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        zIndex: 2,
                        transition: 'box-shadow 0.3s, background 0.3s',
                        fontSize: '1.5rem',
                        color: '#b30a0a',
                        cursor: 'pointer',
                      }}
                    >
                      <Icon icon='mdi:chevron-down' />
                    </a>
                  </div>
                </Div>
                <Div className='col-lg-3 col-sm-6 mb-4 mb-sm-4'>
                  <div style={{position: 'relative'}}>
                    <Card
                      link='/service/ai-technology'
                      src='/images/dm.png'
                      alt='AI & Technology'
                      style={{
                        '&:hover .cs-card_title': {
                          opacity: 0
                        }
                      }}
                    />
                    <a
                      href='/service/ai-technology'
                      className='service-down-arrow-btn'
                      style={{
                        position: 'absolute',
                        left: '50%',
                        bottom: '12px',
                        transform: 'translateX(-50%)',
                        borderRadius: '50%',
                        width: '34px',
                        height: '34px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        zIndex: 2,
                        transition: 'box-shadow 0.3s, background 0.3s',
                        fontSize: '1.5rem',
                        color: '#b30a0a',
                        cursor: 'pointer',
                      }}
                    >
                      <Icon icon='mdi:chevron-down' />
                    </a>
                  </div>
                </Div>
 
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6 mb-4 mb-sm-4'>
                  <div style={{position: 'relative'}}>
                    <Card
                      link='/service/studio'
                      src='/images/we.png'
                      alt='Studio'
                      style={{
                        '&:hover .cs-card_title': {
                          opacity: 0
                        }
                      }}
                    />
                    <a
                      href='/service/studio'
                      className='service-down-arrow-btn'
                      style={{
                        position: 'absolute',
                        left: '50%',
                        bottom: '12px',
                        transform: 'translateX(-50%)',
                        borderRadius: '50%',
                        width: '34px',
                        height: '34px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        zIndex: 2,
                        transition: 'box-shadow 0.3s, background 0.3s',
                        fontSize: '1.5rem',
                        color: '#b30a0a',
                        cursor: 'pointer',
                      }}
                    >
                      <Icon icon='mdi:chevron-down' />
                    </a>
                  </div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
 
      <Spacing lg="150" md="50" />
      <Div>
        <div className="container" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-lg-6 text-left" style={{ paddingRight: '40px' }}>
          <h2
            className="cs-font_50 cs-m0 cs-line_height_4"
            style={{
              fontSize: '3rem',
              lineHeight: '1.3',
              letterSpacing: '1px',
              paddingBottom: '20px',
              color: 'white', 
              marginLeft: '14px',
            }}
          >
            We are out of the world marketing{' '}
            <span id="wonder-text" style={{ color: 'transparent', WebkitTextStroke: '1px red' }}>
              AGENCY
            </span>
            <br />
            But if you want to reach us, we're from{' '}
            <span id="wonder-text" style={{ color: 'transparent', WebkitTextStroke: '1px red' }}>
              HYDERABAD
            </span>
            
          </h2>
        </div>

        {/* Right Section */}
        <div className="col-lg-6">
          <div
            className="cs-text_1"
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#ffffff',
              marginBottom: '30px',
              textAlign: 'justify',
            }}
          >
            <p>
              At Raising 100x, we believe great marketing starts with ideas that are not confined
              to principles and the usual way of thinking. As a digital marketing company in
              Hyderabad, our team consists of fresh and creative mindset individuals. We combine
              creativity and strategy to bring your brand's story to life in ways that truly connect
              and create ripples.
              <br />
              <br />
              Whether it's growing your social media presence or revamping your brand identity, we
              handle it with precision and passion. We're proud to be counted among the best digital
              marketing agencies in Hyderabad, offering a full suite of services designed to raise
              your business 100x — from strategy to branding, content, and advertising — all under
              one roof.
            </p>
          </div>

          <div className="text-left" style={{ marginBottom: '30px' }}>
            <h3
              className="cs-font_30 cs-m0"
              style={{
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '20px',
                fontSize: '1.5rem',
              }}
            >
              Are you ready to raise your brand with Raising 100x?
            </h3>
            <a
              href="/career"
              className="cs-btn cs-style1 agency-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 26px',
                backgroundColor: '#b30a0a',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '15px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#8a0808';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#b30a0a';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              COUNT ME IN
              <Icon icon="mdi:arrow-right" style={{ fontSize: '18px' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Responsive CSS */}
      <style>{`
        @media (max-width: 991px) {
          .cs-font_50 {
            font-size: 2rem !important;
            padding-top: 24px !important;
            letter-spacing: 0.5px !important;
          }
          .cs-text_1 {
            font-size: 1rem !important;
            padding: 0 12px;
          }
        }
        @media (max-width: 575px) {
          .agency-cta-btn {
            width: 100% !important;
            font-size: 15px !important;
            padding: 14px 0 !important;
          }
        }
      `}</style>
    </div>
        <Div className="container">
          <SectionHeading
            title="Behold Our Creation"
            subtitle=""
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
 
      <Spacing lg="150" md="80" />
 
      <Spacing lg="20" md="70" />
      <Div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4" style={{paddingTop: '50px'}}>
          Ideas That Refuse To Be Confined And< br /> Creativity That Spills Beyond Every Boundary
        </h2>
        <Spacing lg="70" md="70" />
        <Div className="cs-video_wrap" style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '90%',
          margin: '80px auto 0',
          overflow: 'hidden'
        }}>
          <VideoModal
            videoSrc="/video/raising100x.mp4"
            bgUrl="/images/100xbg2.jpg"
          />
        </Div>
      </Div>
 
      <Spacing lg="145" md="80" />
     
      <Div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <TestimonialSlider />
      </Div>
      {/* <Spacing lg="80" md="40" /> */}
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Read Our Insights  "
                subtitle=""
                btnText="View More Blogs"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
 
      <Spacing lg="125" md="70" />
      <MovingText text="Brands that reached new heights with us" />
      <Spacing lg="105" md="70" />
 
      <Div className="container">
        <LogoList />
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
    </>
  );
}
 