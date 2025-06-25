import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import Cta from '../../Cta';
import Div from '../../Div';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import PageHeading from '../../PageHeading';

export default function OurWorkPage() {
  pageTitle('Our Work | Raising 100x');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Show PageHeading only on mobile view */}
      <div className="responsive-page-heading">
        <PageHeading
          title="Our Work"
          bgSrc="/images/blog_hero_bg.jpeg"
          pageLinkText="Our Work"
        />
      </div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="OUR WORK"
              subtitle="Explore our portfolio and case studies."
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Here you will find a showcase of our best projects, creative solutions, and the impact we've made for our clients. (Replace this with your real content!)
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/portfolio_1.jpeg"
              alt="Our Work"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* Add more sections as needed */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Want to work with us? <br /> Let's create something amazing together!"
          btnText="Contact Us"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
} 