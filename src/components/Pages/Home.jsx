import React, { useEffect } from 'react';
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
            videoSrc="/video/raising100xvideo.MP4"
            bgUrl="/images/video_bg.jpeg"
          />
        </Div>
      </Div>

      <Spacing lg="145" md="80" />
      {/* <Div className="container">
        <SectionHeading
          title="People Who Make It Possible"
          subtitle=""
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}

      <Div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <TestimonialSlider />
      </Div>
      <Spacing lg="150" md="80" />
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
