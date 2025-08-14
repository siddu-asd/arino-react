import React from 'react';
import Hero from '../../Hero';
import Div from '../../Div';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import Card from '../../Card';
import IconBox from '../../IconBox';
import Cta from '../../Cta';
import { Link } from 'react-router-dom';

export default function OurProductsPage() {
  return (
    <>
      <Hero
        title="Our Products"
        subtitle="Innovative Solutions for Modern Businesses"
        btnText="Explore Products"
        btnLink="#products"
        scrollDownId="#products"
        bgSrc="/images/hero_bg.jpeg"
      />
      <Spacing lg="145" md="80"/>
      
      <Div id="products" className="container">
        <SectionHeading
          title="Our Product Portfolio" 
          subtitle="Discover our cutting-edge solutions designed to transform your business"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45"/>
        
        {/* NexelVR Product */}
        <Div className="row align-items-center mb-5">
          <Div className="col-lg-6">
            <Card className="cs-card_style1">
              <Div className="cs-card_info">
                <h2 className="cs-card_title">NexelVR</h2>
                <p className="cs-card_subtitle">
                  Our flagship product designed to streamline business operations 
                  and enhance productivity through cutting-edge technology solutions. 
                  Built with the latest innovations, NexelVR delivers exceptional performance 
                  and reliability for forward-thinking organizations.
                </p>
                <Div className="cs-card_btn_wrap">
                  <Link to="/products/nexelvr" className="cs-btn cs-style1">
                    <span>Learn More</span>
                    <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="currentColor"/>
                    </svg>
                  </Link>
                </Div>
              </Div>
            </Card>
          </Div>
          <Div className="col-lg-6">
            <img src="/images/ai.jpg" alt="NexelVR Product" className="w-100 rounded" style={{maxHeight: '400px', objectFit: 'cover'}} />
          </Div>
        </Div>
        
        {/* Nisaa Product */}
        <Div className="row align-items-center mb-5">
          <Div className="col-lg-6 order-lg-2">
            <Card className="cs-card_style1">
              <Div className="cs-card_info">
                <h2 className="cs-card_title">Nisaa</h2>
                <p className="cs-card_subtitle">
                  Our innovative digital platform that revolutionizes how businesses 
                  connect with their customers. Built with cutting-edge technology, Nisaa 
                  provides seamless digital experiences and powerful tools for modern enterprises 
                  looking to stay ahead in the digital landscape.
                </p>
                <Div className="cs-card_btn_wrap">
                  <Link to="/products/nisaa" className="cs-btn cs-style1">
                    <span>Learn More</span>
                    <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="currentColor"/>
                    </svg>
                  </Link>
                </Div>
              </Div>
            </Card>
          </Div>
          <Div className="col-lg-6 order-lg-1">
            <img src="/images/ai.jpg" alt="Nisaa Product" className="w-100 rounded" style={{maxHeight: '400px', objectFit: 'cover'}} />
          </Div>
        </Div>
      </Div>
      
      <Spacing lg="145" md="80"/>
      
      <Div className="container">
        <SectionHeading
          title="Why Choose Our Products?" 
          subtitle="Key benefits that set our solutions apart"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45"/>
        <Div className="row">
          <Div className="col-lg-4 col-sm-6">
            <IconBox
              icon="/images/icons/service_icon_1.svg"
              title="Innovation First"
              subtitle="Built with the latest technology and best practices"
            />
            <Spacing lg="30" md="30"/>
          </Div>
          <Div className="col-lg-4 col-sm-6">
            <IconBox
              icon="/images/icons/service_icon_2.svg"
              title="Scalable Solutions"
              subtitle="Grow with your business needs and requirements"
            />
            <Spacing lg="30" md="30"/>
          </Div>
          <Div className="col-lg-4 col-sm-6">
            <IconBox
              icon="/images/icons/service_icon_3.svg"
              title="Expert Support"
              subtitle="Dedicated support team to help you succeed"
            />
            <Spacing lg="30" md="30"/>
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80"/>
      
      <Cta
        title="Ready to Get Started?" 
        subtitle="Contact us to learn more about our products and how they can benefit your business"
        btnText="Contact Us"
        btnLink="/contact"
        bgSrc="/images/cta_bg.jpeg"
      />
    </>
  );
}
