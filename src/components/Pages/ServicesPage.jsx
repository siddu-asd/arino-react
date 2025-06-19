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
                    link='/service/creative-marketing'
                    src='/images/nhj.png'
                    alt='Creative Marketing'
                  />
                  <div className="text-center mt-3">
                    <a href="/service/creative-marketing" className="cs-btn cs-style1" style={{
                      width: '100%',
                      padding: '12px 20px',
                      display: 'inline-block',
                      backgroundColor: 'transparent',
                      color: '#fff',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      fontWeight: '500',
                      boxShadow: '0 2px 5px rgba(78, 4, 4, 0.83)',
                      border: '2px solid rgba(36, 19, 19, 0.28)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #ff0000, #1d1d1d)',
                        border: 'none'
                      }
                    }}>
                      <span>Dive Deep</span>
                    </a>
                  </div>
                  <Spacing lg='0' md='30' />
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    link='/service/branding'
                    src='/images/ge.png'
                    alt='Branding'
                  />
                  <div className="text-center mt-3">
                    <a href="/service/branding" className="cs-btn cs-style1" style={{
                      width: '100%',
                      padding: '12px 25px',
                      display: 'inline-block',
                      backgroundColor: 'transparent',
                      color: '#fff',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      fontWeight: '500',
                      boxShadow: '0 2px 5px rgba(78, 4, 4, 0.83)',
                      border: '2px solid rgba(36, 19, 19, 0.28)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #ff0000, #1d1d1d)',
                        border: 'none'
                      }
                    }}>
                      <span>Dive Deep</span>
                    </a>
                  </div>
                  <Spacing lg='0' md='30' />
                </Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    link='/service/ai-technology'
                    src='/images/dm.png'
                    alt='AI & Technology'
                  />
                  <div className="text-center mt-3">
                    <a href="/service/ai-technology" className="cs-btn cs-style1" style={{
                      width: '100%',
                      padding: '12px 25px',
                      display: 'inline-block',
                      backgroundColor: 'transparent',
                      color: '#fff',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      fontWeight: '500',
                      boxShadow: '0 2px 5px rgba(78, 4, 4, 0.83)',
                      border: '2px solid rgba(36, 19, 19, 0.28)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #ff0000, #1d1d1d)',
                        border: 'none'
                      }
                    }}>
                      <span>Dive Deep</span>
                    </a>
                  </div>
                  <Spacing lg='0' md='30' />
                </Div>

                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    link='/service/studio'
                    src='/images/we.png'
                    alt='Studio'
                  />
                  <div className="text-center mt-3">
                    <a href="/service/studio" className="cs-btn cs-style1" style={{
                      width: '100%',
                      padding: '12px 25px',
                      display: 'inline-block',
                      backgroundColor: 'transparent',
                      color: '#fff',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      fontWeight: '500',
                      boxShadow: '0 2px 5px rgba(78, 4, 4, 0.83)',
                      border: '2px solid rgba(36, 19, 19, 0.28)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #ff0000, #1d1d1d)',
                        border: 'none'
                      }
                    }}>
                      <span>Dive Deep</span>
                    </a>
                  </div>
                  <Spacing lg='0' md='30' />
                </Div>
               
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80' />
    
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
