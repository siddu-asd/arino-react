import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Card from '../Card'
import Cta from '../Cta'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'
import PageHeading from '../PageHeading'


export default function ServicesPage() {
  pageTitle('Service');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="responsive-page-heading">
        <PageHeading
          title="What We Offer"
          bgSrc="/images/blog_hero_bg.jpeg"
          pageLinkText="Services"
        />
      </div>
      <Spacing lg='150' md='80' />
      <Div className='cs-shape_wrap_4'>
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title='We Raise The Bar Through'
                subtitle='Our Capabilities'
              />
              <Spacing lg='90' md='45' />
            </Div>
            <Div className='col-xl-8'>
              <Div className='row'>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    // title='Creative Marketing'
                    link='/service/creative-marketing'
                    src='/images/nhj.png'
                    alt='Creative Marketing'
                  />
                  
                  <Spacing lg='0' md='30' />
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    // title='Branding'
                    link='/service/branding'
                    src='/images/ge.png'
                    alt='Branding'

                  />
                  <Spacing lg='0' md='30' />
                </Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    // title='AI & Technology'
                    link='/service/ai-technology'
                    src='/images/dm.png'
                    alt='AI & Technology'

                  />
                  <Spacing lg='0' md='30' />
                </Div>

                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    // title={
                    //   <>
                    //     Visual<br />
                    //     Story-Telling<br />
                    //     Studio
                    //   </>}
                    link='/service/studio'
                    src='/images/we.png'
                    alt='Studio'
                  />
                  <Spacing lg='0' md='30' />
                </Div>
                {/* <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Consultancy'
                    link='/service/consultancy'
                    src='/images/service_5.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div> */}
                {/* <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Creative Design'
                    link='/service/creative-design'
                    src='/images/service_6.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div> */}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80' />
      {/* <Div className="container">
        <SectionHeading
          title='Providing best <br/>pricing for client'
          subtitle='Pricing & Packaging'
        />
        <Spacing lg='85' md='40' />
        <PricingTableList />
      </Div> */}
      <Spacing lg='125' md='55' />
      <TestimonialSlider />
      <Spacing lg='150' md='80' />

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
  )
}
