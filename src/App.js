import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import BlogPage from './components/Pages/BlogPage';
import BlogDetailsPage from './components/Pages/BlogDetailsPage';
import ContactPage from './components/Pages/ContactPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import PortfolioDetailsPage from './components/Pages/PortfolioDetailsPage';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import ServicesPage from './components/Pages/ServicesPage';
import TeamPage from './components/Pages/TeamPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import TeamDetails from './components/Pages/TeamDetails';
import PhotographyAgencyHome from './components/Pages/PhotographyAgencyHome';
import CreativePortfolioHome from './components/Pages/CreativePortfolioHome';
import DigitalAgencyHome from './components/Pages/DigitalAgencyHome';
import MarketingAgencyHome from './components/Pages/MarketingAgencyHome';
import ShowcasePortfolioHome from './components/Pages/ShowcasePortfolioHome';
import CaseStudyShowcaseHome from './components/Pages/CaseStudyShowcaseHome';
import Layout from './components/Layout';
import CaseStudyDetailsPage from './components/Pages/CaseStudyDetailsPage';
import FaqPage from './components/Pages/FaqPage';
import FreelancerAgencyHome from './components/Pages/FreelancerAgencyHome';
import ArchitectureAgencyHome from './components/Pages/ArchitectureAgencyHome';
import CreativeSolutionHome from './components/Pages/CreativeSolutionHome';
import PersonalPortfolioHome from './components/Pages/PersonalPortfolioHome';
import VideoShowcaseHome from './components/Pages/VideoShowcaseHome';
import CareerPage from './components/Pages/CareerPage';
import OurWorkPage from './components/Pages/CustomRoutes/OurWorkPage';
import RaisingStartups100xPage from './components/Pages/CustomRoutes/RaisingStartups100xPage';
import TopDigitalMarketingAgencyInHyderabadPage from './components/Pages/CustomRoutes/TopDigitalMarketingAgencyInHyderabadPage';
import ServicesMainPage from './components/Pages/CustomRoutes/ServicesMainPage';
import Hr100xPage from './components/Pages/CustomRoutes/Hr100xPage';
import CareersMainPage from './components/Pages/CustomRoutes/CareersMainPage';
import AiAutomationServicePage from './components/Pages/CustomRoutes/AiAutomationServicePage';
import BlogMainPage from './components/Pages/CustomRoutes/BlogMainPage';
import TechnologyPage from './components/Pages/CustomRoutes/TechnologyPage';
import CompanyPage from './components/Pages/CustomRoutes/CompanyPage';
import AiAutomationPage from './components/Pages/CustomRoutes/AiAutomationPage';
import CaseStudyIntegratedMarketingHospitalPage from './components/Pages/CustomRoutes/CaseStudyIntegratedMarketingHospitalPage';
import CaseStudyTransformingJewelleryBrandPage from './components/Pages/CustomRoutes/CaseStudyTransformingJewelleryBrandPage';
import MarketingInternshipChallengePage from './components/Pages/CustomRoutes/MarketingInternshipChallengePage';
import OfflineExperientialMarketingPage from './components/Pages/CustomRoutes/OfflineExperientialMarketingPage';
import PortfolioConsumerProductsPage from './components/Pages/CustomRoutes/PortfolioConsumerProductsPage';
import PortfolioHoversMotionsPage from './components/Pages/CustomRoutes/PortfolioHoversMotionsPage';
import CreativeStudioPage from './components/Pages/CustomRoutes/CreativeStudioPage';
import HowAiIsTransformingMarketingPage from './components/Pages/CustomRoutes/HowAiIsTransformingMarketingPage';
import HomeRtlPage from './components/Pages/CustomRoutes/HomeRtlPage';
import CategoryProductDesignPage from './components/Pages/CustomRoutes/CategoryProductDesignPage';
import Home08Page from './components/Pages/CustomRoutes/Home08Page';
import DesignInternshipChallengePage from './components/Pages/CustomRoutes/DesignInternshipChallengePage';
import JobApplyPage from './components/Pages/CustomRoutes/JobApplyPage';
import CreatingWinningContentMarketingStrategyPage from './components/Pages/CustomRoutes/CreatingWinningContentMarketingStrategyPage';
import BestFrequencyMarketingEmailsPage from './components/Pages/CustomRoutes/BestFrequencyMarketingEmailsPage';
import PerfectFromBeginningToEndPage from './components/Pages/CustomRoutes/PerfectFromBeginningToEndPage';
import TeamJavierMoralesPage from './components/Pages/CustomRoutes/TeamJavierMoralesPage';
import WhatWeLikeAboutTeamworkPage from './components/Pages/CustomRoutes/WhatWeLikeAboutTeamworkPage';
import DigitalMarketingStatsImpactPage from './components/Pages/CustomRoutes/DigitalMarketingStatsImpactPage';
import VideoEditorInternshipChallengePage from './components/Pages/CustomRoutes/VideoEditorInternshipChallengePage';
import MarketingAutomationLeadGenPage from './components/Pages/CustomRoutes/MarketingAutomationLeadGenPage';
import TeamMeganOustinPage from './components/Pages/CustomRoutes/TeamMeganOustinPage';
import IntroducingTecnologiaFortWorthPage from './components/Pages/CustomRoutes/IntroducingTecnologiaFortWorthPage';
import AdditionalServicesGrowBusinessPage from './components/Pages/CustomRoutes/AdditionalServicesGrowBusinessPage';
import DeathOfTraditionalMarketingPage from './components/Pages/CustomRoutes/DeathOfTraditionalMarketingPage';
import TeamMatZalmanPage from './components/Pages/CustomRoutes/TeamMatZalmanPage';
import MicrosoftTeamsProductivityPage from './components/Pages/CustomRoutes/MicrosoftTeamsProductivityPage';
import ProductWebApplicationPage from './components/Pages/CustomRoutes/ProductWebApplicationPage';
import PortfolioPhotoshopDesignPage from './components/Pages/CustomRoutes/PortfolioPhotoshopDesignPage';
import AdvanceTabPage from './components/Pages/CustomRoutes/AdvanceTabPage';
import PortfolioCustomEcommercePage from './components/Pages/CustomRoutes/PortfolioCustomEcommercePage';
import CallToActionPage from './components/Pages/CustomRoutes/CallToActionPage';
import ApplicationPage from './components/Pages/CustomRoutes/ApplicationPage';
import CounterPage from './components/Pages/CustomRoutes/CounterPage';
import ProductAppInstallmentPage from './components/Pages/CustomRoutes/ProductAppInstallmentPage';
import SassLandingPage from './components/Pages/CustomRoutes/SassLandingPage';
import ProgressbarPage from './components/Pages/CustomRoutes/ProgressbarPage';
import TestimonialPage from './components/Pages/CustomRoutes/TestimonialPage';
import Care100xPage from './components/Pages/CustomRoutes/Care100xPage';
import Virtualtour from './components/Pages/CustomRoutes/Virtualtour';
import HyproPage from './components/Pages/CustomRoutes/HyproPage';
import NisaaPage from './components/Pages/CustomRoutes/NisaaPage';
import OurProductsPage from './components/Pages/CustomRoutes/OurProductsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="photography-agency"
            element={<PhotographyAgencyHome />}
          />
          <Route path="digital-agency" element={<DigitalAgencyHome />} />
          <Route path="marketing-agency" element={<MarketingAgencyHome />} />
          <Route path="freelancer-agency" element={<FreelancerAgencyHome />} />
          <Route
            path="architecture-agency"
            element={<ArchitectureAgencyHome />}
          />
          <Route path="creative-solution" element={<CreativeSolutionHome />} />
          <Route
            path="personal-portfolio"
            element={<PersonalPortfolioHome />}
          />
          <Route path="/portfolio-showcase" element={<ShowcasePortfolioHome />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicesPage />} />
          <Route
            path="service/:serviceDetailsId"
            element={<ServiceDetailsPage />}
          />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route
            path="portfolio/:portfolioDetailsId"
            element={<PortfolioDetailsPage />}
          />
          <Route path="blog" element={<BlogMainPage />} />
          <Route path="blog/:blogDetailsId" element={<BlogDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team/:teamDetails" element={<TeamDetails />} />
          <Route
            path="/case-study/:caseStudyDetailsId"
            element={<CaseStudyDetailsPage />}
          />
          <Route path="faq" element={<FaqPage />} />
          <Route path="our-work" element={<OurWorkPage />} />
          <Route path="raisingstatrups100x" element={<RaisingStartups100xPage />} />
          <Route path="top-digital-marketing-agency-in-hyderabad" element={<TopDigitalMarketingAgencyInHyderabadPage />} />
          <Route path="services" element={<ServicesMainPage />} />
          <Route path="hr100x" element={<Hr100xPage />} />
          <Route path="careers" element={<CareersMainPage />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="ai-automation-service" element={<AiAutomationServicePage />} />
          <Route path="technology" element={<TechnologyPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="ai-automation" element={<AiAutomationPage />} />
          <Route path="case-study-integrated-marketing-for-a-multi-speciality-hospital" element={<CaseStudyIntegratedMarketingHospitalPage />} />
          <Route path="case-study-transforming-a-jewellery-brands-new-branch-launch" element={<CaseStudyTransformingJewelleryBrandPage />} />
          <Route path="raisingthebar/marketing-internship-challenge" element={<MarketingInternshipChallengePage />} />
          <Route path="offline-experiential-marketing" element={<OfflineExperientialMarketingPage />} />
          <Route path="portfolio/consumer-products" element={<PortfolioConsumerProductsPage />} />
          <Route path="creative-studio" element={<CreativeStudioPage />} />
          <Route path="how-ai-is-transforming-marketing" element={<HowAiIsTransformingMarketingPage />} />
          <Route path="home-rtl" element={<HomeRtlPage />} />
          <Route path="category/product-design" element={<CategoryProductDesignPage />} />
          <Route path="home-08" element={<Home08Page />} />
          <Route path="raisingthebar/design-internship-challenge" element={<DesignInternshipChallengePage />} />
          <Route path="job-apply" element={<JobApplyPage />} />
          <Route path="creating-a-winning-content-marketing-strategy" element={<CreatingWinningContentMarketingStrategyPage />} />
          <Route path="what-is-the-best-frequency-for-sending-marketing-emails" element={<BestFrequencyMarketingEmailsPage />} />
          <Route path="perfect-from-beginning-to-end-faster-and-more-efficiently" element={<PerfectFromBeginningToEndPage />} />
          <Route path="team/javier-morales" element={<TeamJavierMoralesPage />} />
          <Route path="what-we-like-about-teamwork-during-big-projects" element={<WhatWeLikeAboutTeamworkPage />} />
          <Route path="10-digital-marketing-stats-that-will-impact-your-business" element={<DigitalMarketingStatsImpactPage />} />
          <Route path="raisingthebar/video-editor-internship-challenge" element={<VideoEditorInternshipChallengePage />} />
          <Route path="how-does-marketing-automation-help-lead-generation" element={<MarketingAutomationLeadGenPage />} />
          <Route path="team/megan-oustin" element={<TeamMeganOustinPage />} />
          <Route path="events__trashed/introducing-tecnologia-fort-worth" element={<IntroducingTecnologiaFortWorthPage />} />
          <Route path="additional-services-that-will-grow-your-business-for-you" element={<AdditionalServicesGrowBusinessPage />} />
          <Route path="the-death-of-traditional-marketing-building-adaptive-brand-strategies" element={<DeathOfTraditionalMarketingPage />} />
          <Route path="team/mat-zalman" element={<TeamMatZalmanPage />} />
          <Route path="microsoft-teams-the-productivity-swiss-army-knife" element={<MicrosoftTeamsProductivityPage />} />
          <Route path="product/web-application" element={<ProductWebApplicationPage />} />
          <Route path="portfolio/photoshop-design" element={<PortfolioPhotoshopDesignPage />} />
          <Route path="advance-tab" element={<AdvanceTabPage />} />
          <Route path="portfolio/custom-ecommerce" element={<PortfolioCustomEcommercePage />} />
          <Route path="call-to-action" element={<CallToActionPage />} />
          <Route path="application" element={<ApplicationPage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="product/app-installment" element={<ProductAppInstallmentPage />} />
          <Route path="sass-landing" element={<SassLandingPage />} />
          <Route path="progressbar" element={<ProgressbarPage />} />
          <Route path="testimonial" element={<TestimonialPage />} />
          <Route path="care100x" element={<Care100xPage />} />
          <Route path="virtualtour" element={<Virtualtour />} />
          <Route path="products" element={<HyproPage />} />
          <Route path="products/nexelvr" element={<HyproPage />} />
          <Route path="products/nisaa" element={<NisaaPage />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route
            path="creative-portfolio"
            element={<CreativePortfolioHome />}
          />
          <Route
            path="showcase-portfolio"
            element={<ShowcasePortfolioHome />}
          />
          <Route
            path="case-study-showcase"
            element={<CaseStudyShowcaseHome />}
          />
          <Route path="video-showcase" element={<VideoShowcaseHome />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
