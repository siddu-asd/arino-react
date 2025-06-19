import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ServiceList from '../ServiceList';
import PageHeading from '../PageHeading';

export default function AboutPage() {
  pageTitle('Explore Our Space | Raising 100x');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     {/* Show PageHeading only on mobile view */}
     <div className="responsive-page-heading">
      <PageHeading
        title=" About Us"
        bgSrc="/images/blog_hero_bg.jpeg"
        pageLinkText="About Us"
      />
     </div>
      {/* Start Page Heading Section */}
      
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="EXPLORE OUR SPACE"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Our journey began with a simple belief: brands deserve more than ordinary solutions. That's why we operate like a crew on a space station—always scanning the horizon, ready to respond to the next big signal from Earth. 
               <br /><br /> For us, every project is a mission, every brief a new world to explore. <br /> <br /> 
                Our team is made up of storytellers and tech-whisperers who believe that marketing isn't just about reaching audiences—it's about making an impact that's truly out of this world.  
              <br /> <br />  With Raising 100x, you're not just launching a campaign; you're embarking on a journey where imagination has no limits and results are lightyears ahead.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/hy.png"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          {/* <Div className="col-lg-7">
            <img
              src="/images/9i.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/12l.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div> */}
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/EOS.png"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="What Fuels Us?"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p>
                We believe brands shouldn't just grow—they should multiply, surprise, and spark conversations. Our philosophy? Stay endlessly curious, break the "rules" that don't serve you, and never settle for less.
              </p>

              <p>
                You are free to choose other marketing agencies, if you are looking for:
              </p>

              <ul>
                <li>Websites overflowing with forgettable content</li>
                <li>Videos that look like they were shot in a hurry</li>
                <li>Cluttered layouts and copy-paste social media posts</li>
              </ul>

             

              <Spacing lg="15" md="15" />
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}
       <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="What you get with Raising 100x"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
             <p>
                
                We're obsessed with mixing human imagination and AI wizardry to find that spot where ideas go from "nice" to "no one's ever seen this before."
              </p>

              <p>
                For us, every project is a playground, every brief is an invitation to experiment, and every client is a co-conspirator in making something unforgettable. If you're ready to ditch the ordinary and chase the 100x, you're in the right space.
              </p>

              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/fr.png"
              alt="About"
              className="w-100 cs-radius_15"
            />
        
          </Div>
         
        </Div>
      </Div>
      <Spacing lg="15" md="55" />

      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Understand Our Way of Working"
          subtitle="From Plan to Launch"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList variant="cs-style2" />
      </Div>
      <Spacing lg="120" md="50" />

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" /> */}
      {/* <Div className="container">
        <SectionHeading
          title="People Who Make It Possible"
          subtitle=""
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}
      {/* End Team Section */}

      {/* Start CTA Section */}
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
      {/* End CTA Section */}
    </>
  );
}
