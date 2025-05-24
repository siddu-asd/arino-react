import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pageTitle } from '../../helper';
import Button from '../Button';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import { portfolioItems } from './PortfolioPage'; // adjust the import as needed

export default function PortfolioDetailsPage() {
  const { portfolioDetailsId } = useParams();

  const deslugify = (slug) => slug.replace(/-/g, ' ').toLowerCase();

  const portfolio = portfolioItems.find(
    (item) => item.title.toLowerCase() === deslugify(portfolioDetailsId)
  );

  useEffect(() => {
    pageTitle('Portfolio Details');
    window.scrollTo(0, 0);
  }, []);

  if (!portfolio) {
    return (
      <Div className="container">
        <h2>Portfolio item not found.</h2>
      </Div>
    );
  }

  return (
    <>
      <PageHeading
        title="Portfolio Details"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText={portfolio.title}
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <img
          src={portfolio.src}
          alt={portfolio.title}
          className="cs-radius_15 w-100"
        />
        <Spacing lg="90" md="40" />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading title={portfolio.title} subtitle="Creative">
              <Spacing lg="40" md="20" />
              <p>
                This is a placeholder description for the project titled "
                {portfolio.title}". You can replace this with real content.
              </p>
              <p>
                Additional project context, tools used, challenges, and outcomes
                can be documented here.
              </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
  <Spacing lg="60" md="40" />
  <h2 className="cs-font_30 cs-font_26_sm cs-m0">Project Info -</h2>
  <Spacing lg="50" md="30" />
  <Div className="row">
    <Div className="col-6">
      <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
        Category:
      </h3>
      <p className="cs-m0">{portfolio.category}</p>
      <Spacing lg="30" md="30" />
    </Div>
    <Div className="col-6">
      <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
        Location:
      </h3>
      <p className="cs-m0">{portfolio.location}</p>
      <Spacing lg="30" md="30" />
    </Div>
    <Div className="col-6">
      <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
        Software:
      </h3>
      <p className="cs-m0">{portfolio.software}</p>
      <Spacing lg="30" md="30" />
    </Div>
    <Div className="col-6">
      <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
        Dated:
      </h3>
      <p className="cs-m0">{portfolio.date}</p>
      <Spacing lg="30" md="30" />
    </Div>
    <Div className="col-6">
      <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
        Client:
      </h3>
      <p className="cs-m0">{portfolio.client}</p>
      <Spacing lg="30" md="30" />
    </Div>
  </Div>
</Div>
        </Div>
        <Spacing lg="65" md="10" />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button
              btnLink="/portfolio/previous-slug"
              btnText="Prev Project"
              variant="cs-type1"
            />
          </Div>
          <Div>
            <Button btnLink="/portfolio/next-slug" btnText="Next Project" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="agency@arino.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
