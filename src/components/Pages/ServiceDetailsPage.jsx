import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pageTitle } from '../../helper';
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
    description: 'What We Bring Through Creative Marketing ',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'PICTURE', description: 'We Picture Our Thoughts ' },
      { icon: '/images/icons/service_icon_2.svg', title: 'PLOT', description: 'We Plot Our Ideas ' },
      { icon: '/images/icons/service_icon_3.svg', title: 'PRESENT', description: 'We Present Our Creation' }
    ],
    relatedServices: [
      'Marketing Strategy & Planning',

      'Digital Marketing & Analysis',

      'Content Creation',

      'Social Media Marketing'
    ]
  },
  'branding': {
    title: 'Branding',
    subtitle: 'Build a bold and memorable brand identity.',
    image: '/images/17q.jpeg',
    description: 'What We Bring Through Branding',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'PICTURE', description: 'We Picture Our Thoughts' },
      { icon: '/images/icons/service_icon_2.svg', title: 'PLOT', description: 'We Plot Our Ideas' },
      { icon: '/images/icons/service_icon_3.svg', title: 'PRESENT', description: 'We Present Our Creation' }
    ],
    relatedServices: [
      'Brand Name and Tagline  ',
      'Brand Identity ',
      'Product & Service Branding ',
      'Personal Branding  ',



    ]
  },
  'ai-technology': {
    title: 'AI & Technology',
    subtitle: 'Empowering businesses with smart tech solutions.',
    image: '/images/18r.jpeg',
    description: 'What We Bring Through AI & Technology ',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'PICTURE', description: 'We Picture Our Thoughts' },
      { icon: '/images/icons/service_icon_2.svg', title: 'PLOT', description: 'We Plot Our Ideas' },
      { icon: '/images/icons/service_icon_3.svg', title: 'PRESENT', description: 'We Present Our Creation' }
    ],
    relatedServices: [
      'Website & App Development',
      'AI Powered Chatbots  ',
      ' In Store AR/VR  ',
      'Workflow Automation '
    ]
  },
  'studio': {
    title: '  Visual Storytelling Studio',
    subtitle: 'Professional studio production for audio and visuals.',
    image: '/images/19s.jpeg',
    description: 'What We Bring Through Visual Storytelling Studio',
    process: [
      { icon: '/images/icons/service_icon_1.svg', title: 'PICTURE', description: 'We Picture Our Thoughts' },
      { icon: '/images/icons/service_icon_2.svg', title: 'PLOT', description: 'We Plot Our Ideas' },
      { icon: '/images/icons/service_icon_3.svg', title: 'PRESENT', description: 'We Present Our Creation' }
    ],
    relatedServices: [
      'Podcast ',
      'Product Photo Shoot',
      'Ad-Film ',
      'Video Shooting'
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
          title="Our Design Adventure Begins With"
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
            <h2 className="cs-font_50 cs-m0"> {service.description.replace(/\w\S*/g, (txt) =>
              txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
            )}</h2>
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
        {/* <Div className="container">
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
        </Div> */}
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Have an idea? <br /> We’ve got you!  
     Let’s talk over a cup of coffee... "
          btnText="YES I'M IN!"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
