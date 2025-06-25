import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import Card from '../../Card';
import Cta from '../../Cta';
import Div from '../../Div';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import PageHeading from '../../PageHeading';
import { Icon } from '@iconify/react';

export default function ServicesMainPage() {
  pageTitle('Services | Raising 100x');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="responsive-page-heading">
        <PageHeading
          title="Services"
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
                  <div style={{position: 'relative'}}>
                    <Card
                      link='/service/creative-marketing'
                      src='/images/nhj.png'
                      alt='Creative Marketing'
                    />
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
                  <Spacing lg='0' md='30' />
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <div style={{position: 'relative'}}>
                    <Card
                      link='/service/branding'
                      src='/images/ge.png'
                      alt='Branding'
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
                  <Spacing lg='0' md='30' />
                </Div>
                <Div className='col-lg-3 col-sm-6'>
                  <div style={{position: 'relative'}}>
                    <Card
                      link='/service/ai-technology'
                      src='/images/dm.png'
                      alt='AI & Technology'
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
                  <Spacing lg='0' md='30' />
                </Div>

                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <div style={{position: 'relative'}}>
                    <Card
                      link='/service/studio'
                      src='/images/we.png'
                      alt='Studio'
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
                  <Spacing lg='0' md='30' />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Cta
          title="Have an idea? <br /> We've got you!  \nLet's talk over a cup of coffee... "
          btnText="YES I'M IN!"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
} 