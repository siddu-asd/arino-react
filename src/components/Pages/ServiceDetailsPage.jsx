import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pageTitle } from '../../helper';
import Accordion from '../Accordion';
import Button from '../Button';
import Cta from '../Cta';
import IconBox from '../IconBox';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TestimonialSlider from '../Slider/TestimonialSlider';
import Spacing from '../Spacing';

const servicesData = {
  'creative-marketing': {
    title: 'Creative Marketing',
    subtitle: 'Engaging campaigns that captivate and convert.',
    image: '/images/service_1.jpeg',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'Campaign Strategy', description: 'Design data-driven marketing strategies.' },
      { icon: '/images/icons/service_icon_2.svg', title: 'Creative Design', description: 'Develop visual content that connects.' },
      { icon: '/images/icons/service_icon_3.svg', title: 'Launch & Analyze', description: 'Execute and refine campaigns.' }
    ],
    relatedServices: [
      'Social Media Ads',
      'Influencer Marketing',
      'Content Creation',
      'Campaign Analytics'
    ]
  },
  'branding': {
    title: 'Branding',
    subtitle: 'Build a bold and memorable brand identity.',
    image: '/images/service_2.jpeg',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'Brand Research', description: 'Understand market and audience.' },
      { icon: '/images/icons/service_icon_2.svg', title: 'Identity Design', description: 'Logo, color, and typography.' },
      { icon: '/images/icons/service_icon_3.svg', title: 'Brand Guidelines', description: 'Consistent application across media.' }
    ],
    relatedServices: [
      'Logo Design',
      'Naming Strategy',
      'Visual Identity',
      'Brand Storytelling'
    ]
  },
  'ai-technology': {
    title: 'AI & Technology',
    subtitle: 'Empowering businesses with smart tech solutions.',
    image: '/images/service_6.jpeg',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'Tech Consulting', description: 'Define AI and tech roadmap.' },
      { icon: '/images/icons/service_icon_2.svg', title: 'Model Development', description: 'Build AI models tailored to your goals.' },
      { icon: '/images/icons/service_icon_3.svg', title: 'Integration', description: 'Deploy solutions into your workflow.' }
    ],
    relatedServices: [
      'Chatbots',
      'Recommendation Engines',
      'Process Automation',
      'Data Analysis'
    ]
  },
  'studio': {
    title: 'Studio – Podcast, Ad-Films, Product Shoot',
    subtitle: 'Professional studio production for audio and visuals.',
    image: '/images/service_7.jpeg',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'Concept Planning', description: 'Develop scripts and storyboards.' },
      { icon: '/images/icons/service_icon_2.svg', title: 'Production', description: 'Record, shoot, and direct the media.' },
      { icon: '/images/icons/service_icon_3.svg', title: 'Post Production', description: 'Edit, mix, and finalize deliverables.' }
    ],
    relatedServices: [
      'Podcast Production',
      'Product Photography',
      'Ad-Film Shoots',
      'Studio Rentals'
    ]
  }
};

export default function ServiceDetailsPage() {
  pageTitle('Service Details');
  const { serviceDetailsId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const service = servicesData[serviceDetailsId];

  if (!service) {
    return (
      <Div className="container text-center">
        <Spacing lg="100" md="50" />
        <h2>Service not found</h2>
        <Spacing lg="100" md="50" />
      </Div>
    );
  }

  return (
    <>
      <PageHeading
        title={service.title}
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText={serviceDetailsId}
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Design working process"
          subtitle={service.title}
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
              <img src={service.image} alt={service.title} className="cs-radius_15 w-100" />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Below are related services to {service.title.toLowerCase()}</h2>
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
      <Spacing lg="150" md="80" />
      <TestimonialSlider />
      <Spacing lg="145" md="80" />
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title="Some pre questions and answers"
                subtitle="FAQ’s"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
