import { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Team from '../Team';
const teamData = [
  {
    memberImage: '/images/member_1.jpeg',
    memberName: 'Melon Bulgery',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Olinaz Fushi',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_3.jpeg',
    memberName: 'David Elone',
    memberDesignation: 'React Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_4.jpeg',
    memberName: 'Melina Opole',
    memberDesignation: 'WP Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_3.jpeg',
    memberName: 'David Elone',
    memberDesignation: 'React Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_4.jpeg',
    memberName: 'Melina Opole',
    memberDesignation: 'WP Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_1.jpeg',
    memberName: 'Melon Bulgery',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Olinaz Fushi',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
];

export default function TeamPage() {
  pageTitle('Team');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Our Team"
        bgSrc="images/team_hero_bg.jpeg"
        pageLinkText="Team"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="People Who Make It Possible"
          subtitle=""
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {teamData.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Spacing lg="70" md="50" />
       <Div className="container">
               <Cta
                 title="Have an idea? <br /> We’ve got you!  
       Let’s talk over a cup of coffee... "
                 btnText="YES I'M IN!"
                 btnLink="/contact"
                 bgSrc="/images/cta_bg.jpeg"
               />
             </Div>
      </Div>
    </>
  );
}
