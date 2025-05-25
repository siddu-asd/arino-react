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
  'ui-ux-design': {
    title: 'UI/UX Design',
    subtitle: 'Designing user-friendly digital interfaces.',
    image: '/images/service_1.jpeg',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'Research', description: 'Understanding user needs.' },
      { icon: '/images/icons/service_icon_2.svg', title: 'Wireframes', description: 'Creating layout blueprints.' },
      { icon: '/images/icons/service_icon_3.svg', title: 'Visual Design', description: 'Designing attractive interfaces.' }
    ],
    relatedServices: [
      'Mobile apps design',
      'User research',
      'Interaction design',
      'UI kit creation'
    ]
  },
    'Social Ad Campaign': {
    title: 'social ad campaign',
    subtitle: 'Designing user-friendly digital interfaces.',
    image: '/images/service_1.jpeg',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'Research', description: 'Understanding user needs.' },
      { icon: '/images/icons/service_icon_2.svg', title: 'Wireframes', description: 'Creating layout blueprints.' },
      { icon: '/images/icons/service_icon_3.svg', title: 'Visual Design', description: 'Designing attractive interfaces.' }
    ],
    relatedServices: [
      'Mobile apps design',
      'User research',
      'Interaction design',
      'UI kit creation'
    ]
  },
   'WP Development': {
    title: 'WP Development',
    subtitle: 'Designing user-friendly digital interfaces.',
    image: '/images/service_1.jpeg',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'Research', description: 'Understanding user needs.' },
      { icon: '/images/icons/service_icon_2.svg', title: 'Wireframes', description: 'Creating layout blueprints.' },
      { icon: '/images/icons/service_icon_3.svg', title: 'Visual Design', description: 'Designing attractive interfaces.' }
    ],
    relatedServices: [
      'Mobile apps design',
      'User research',
      'Interaction design',
      'UI kit creation'
    ]
  },
   'Branding': {
    title: 'Branding',
    subtitle: 'Designing user-friendly digital interfaces.',
    image: '/images/service_1.jpeg',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'Research', description: 'Understanding user needs.' },
      { icon: '/images/icons/service_icon_2.svg', title: 'Wireframes', description: 'Creating layout blueprints.' },
      { icon: '/images/icons/service_icon_3.svg', title: 'Visual Design', description: 'Designing attractive interfaces.' }
    ],
    relatedServices: [
      'Mobile apps design',
      'User research',
      'Interaction design',
      'UI kit creation'
    ]
  },
  'reactjs-development': {
    title: 'React.js Development',
    subtitle: 'Building scalable and performant UIs with React.js.',
    image: '/images/service_2.jpeg',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'Component Architecture', description: 'Structuring reusable components.' },
      { icon: '/images/icons/service_icon_2.svg', title: 'State Management', description: 'Managing global app state efficiently.' },
      { icon: '/images/icons/service_icon_3.svg', title: 'API Integration', description: 'Connecting frontend to backend.' }
    ],
    relatedServices: [
      'Next.js development',
      'Redux setup',
      'Custom UI components',
      'SSR & SEO optimization'
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Grow your brand with effective marketing strategies.',
    image: '/images/service_3.jpeg',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'SEO', description: 'Boost search visibility.' },
      { icon: '/images/icons/service_icon_2.svg', title: 'Social Media', description: 'Engage users on social platforms.' },
      { icon: '/images/icons/service_icon_3.svg', title: 'Email Marketing', description: 'Nurture leads via email campaigns.' }
    ],
    relatedServices: [
      'Content marketing',
      'Lead generation',
      'Google Ads',
      'Analytics'
    ]
  },
  'technology': {
    title: 'Technology Consulting',
    subtitle: 'Leverage technology for business transformation.',
    image: '/images/service_4.jpeg',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'Assessment', description: 'Evaluate current systems.' },
      { icon: '/images/icons/service_icon_2.svg', title: 'Strategy', description: 'Define technology roadmap.' },
      { icon: '/images/icons/service_icon_3.svg', title: 'Implementation', description: 'Integrate and optimize tools.' }
    ],
    relatedServices: [
      'IT modernization',
      'Cloud adoption',
      'DevOps consulting',
      'Cybersecurity'
    ]
  },

   'consultancy': {
    title: 'Consultancy',
    subtitle: 'Strategic guidance for business and digital growth.',
    image: '/images/service_5.jpeg',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'Business Analysis', description: 'Understanding client business needs.' },
      { icon: '/images/icons/service_icon_2.svg', title: 'Solution Mapping', description: 'Creating tailored business solutions.' },
      { icon: '/images/icons/service_icon_3.svg', title: 'Execution Planning', description: 'Roadmaps to achieve goals.' }
    ],
    relatedServices: [
      'Digital transformation',
      'IT consulting',
      'Business strategy',
      'Process improvement'
    ]
  },
  'creative-design': {
    title: 'Creative Design',
    subtitle: 'Innovative and visually appealing designs for brands.',
    image: '/images/service_6.jpeg',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'Brand Discovery', description: 'Identifying brand identity and voice.' },
      { icon: '/images/icons/service_icon_2.svg', title: 'Concept Design', description: 'Drafting unique visual ideas.' },
      { icon: '/images/icons/service_icon_3.svg', title: 'Final Delivery', description: 'Producing complete creative assets.' }
    ],
    relatedServices: [
      'Branding',
      'Print design',
      'Motion graphics',
      'Web visuals'
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
            <h2 className="cs-font_50 cs-m0">Below our most {service.title.toLowerCase()} related services</h2>
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
