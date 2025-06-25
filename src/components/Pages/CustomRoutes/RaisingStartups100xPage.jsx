import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import Cta from '../../Cta';
import Div from '../../Div';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import PageHeading from '../../PageHeading';

export default function RaisingStartups100xPage() {
  pageTitle('Raising Startups 100x | Raising 100x');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Show PageHeading only on mobile view */}
      <div className="responsive-page-heading">
        <PageHeading
          title="Raising Startups 100x"
          bgSrc="/images/blog_hero_bg.jpeg"
          pageLinkText="Raising Startups 100x"
        />
      </div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="RAISING STARTUPS 100x"
              subtitle="Empowering the next generation of startups."
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Welcome to Raising Startups 100x! Here, we focus on helping startups grow, innovate, and achieve exponential success. (Replace this with your real content!)
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/portfolio_2.jpeg"
              alt="Raising Startups 100x"
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
          title="Ready to scale your startup? <br /> Let's connect and make it happen!"
          btnText="Contact Us"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
} 