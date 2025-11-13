import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import WhatsAppButton from './components/whatsapp/WhatsAppButton';
import PerformanceMonitor from './components/PerformanceMonitor';
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';
import CriticalCSS from './components/CriticalCSS';
import ResourceOptimizer from './components/ResourceOptimizer';
import MemoryOptimizer from './components/MemoryOptimizer';
import { preloadCriticalImages } from './utils/imageOptimization';

// Lazy load components for better performance
const Home = React.lazy(() => import('./components/Pages/Home'));
const AboutPage = React.lazy(() => import('./components/Pages/AboutPage'));
// const BlogPage = React.lazy(() => import('./components/Pages/BlogPage'));
const BlogDetailsPage = React.lazy(() => import('./components/Pages/BlogDetailsPage'));
const ContactPage = React.lazy(() => import('./components/Pages/ContactPage'));
const ErrorPage = React.lazy(() => import('./components/Pages/ErrorPage'));
const PortfolioDetailsPage = React.lazy(() => import('./components/Pages/PortfolioDetailsPage'));
const ServiceDetailsPage = React.lazy(() => import('./components/Pages/ServiceDetailsPage'));
const ServicesPage = React.lazy(() => import('./components/Pages/ServicesPage'));
const TeamPage = React.lazy(() => import('./components/Pages/TeamPage'));
const PortfolioPage = React.lazy(() => import('./components/Pages/PortfolioPage'));
const TeamDetails = React.lazy(() => import('./components/Pages/TeamDetails'));
const PhotographyAgencyHome = React.lazy(() => import('./components/Pages/PhotographyAgencyHome'));
const CreativePortfolioHome = React.lazy(() => import('./components/Pages/CreativePortfolioHome'));
const DigitalAgencyHome = React.lazy(() => import('./components/Pages/DigitalAgencyHome'));
const MarketingAgencyHome = React.lazy(() => import('./components/Pages/MarketingAgencyHome'));
const ShowcasePortfolioHome = React.lazy(() => import('./components/Pages/ShowcasePortfolioHome'));
const CaseStudyShowcaseHome = React.lazy(() => import('./components/Pages/CaseStudyShowcaseHome'));
const CaseStudyDetailsPage = React.lazy(() => import('./components/Pages/CaseStudyDetailsPage'));
const FaqPage = React.lazy(() => import('./components/Pages/FaqPage'));
const FreelancerAgencyHome = React.lazy(() => import('./components/Pages/FreelancerAgencyHome'));
const ArchitectureAgencyHome = React.lazy(() => import('./components/Pages/ArchitectureAgencyHome'));
const CreativeSolutionHome = React.lazy(() => import('./components/Pages/CreativeSolutionHome'));
const PersonalPortfolioHome = React.lazy(() => import('./components/Pages/PersonalPortfolioHome'));
const VideoShowcaseHome = React.lazy(() => import('./components/Pages/VideoShowcaseHome'));
const CareerPage = React.lazy(() => import('./components/Pages/CareerPage'));
// Lazy load custom route components
const OurWorkPage = React.lazy(() => import('./components/Pages/CustomRoutes/OurWorkPage'));
const RaisingStartups100xPage = React.lazy(() => import('./components/Pages/CustomRoutes/RaisingStartups100xPage'));
const TopDigitalMarketingAgencyInHyderabadPage = React.lazy(() => import('./components/Pages/CustomRoutes/TopDigitalMarketingAgencyInHyderabadPage'));
const ServicesMainPage = React.lazy(() => import('./components/Pages/CustomRoutes/ServicesMainPage'));
const Hr100xPage = React.lazy(() => import('./components/Pages/CustomRoutes/Hr100xPage'));
const CareersMainPage = React.lazy(() => import('./components/Pages/CustomRoutes/CareersMainPage'));
const AiAutomationServicePage = React.lazy(() => import('./components/Pages/CustomRoutes/AiAutomationServicePage'));
const BlogMainPage = React.lazy(() => import('./components/Pages/CustomRoutes/BlogMainPage'));
const TechnologyPage = React.lazy(() => import('./components/Pages/CustomRoutes/TechnologyPage'));
const CompanyPage = React.lazy(() => import('./components/Pages/CustomRoutes/CompanyPage'));
const AiAutomationPage = React.lazy(() => import('./components/Pages/CustomRoutes/AiAutomationPage'));
const CaseStudyIntegratedMarketingHospitalPage = React.lazy(() => import('./components/Pages/CustomRoutes/CaseStudyIntegratedMarketingHospitalPage'));
const CaseStudyTransformingJewelleryBrandPage = React.lazy(() => import('./components/Pages/CustomRoutes/CaseStudyTransformingJewelleryBrandPage'));
const MarketingInternshipChallengePage = React.lazy(() => import('./components/Pages/CustomRoutes/MarketingInternshipChallengePage'));
const OfflineExperientialMarketingPage = React.lazy(() => import('./components/Pages/CustomRoutes/OfflineExperientialMarketingPage'));
const PortfolioConsumerProductsPage = React.lazy(() => import('./components/Pages/CustomRoutes/PortfolioConsumerProductsPage'));
const CreativeStudioPage = React.lazy(() => import('./components/Pages/CustomRoutes/CreativeStudioPage'));
const HowAiIsTransformingMarketingPage = React.lazy(() => import('./components/Pages/CustomRoutes/HowAiIsTransformingMarketingPage'));
const HomeRtlPage = React.lazy(() => import('./components/Pages/CustomRoutes/HomeRtlPage'));
const CategoryProductDesignPage = React.lazy(() => import('./components/Pages/CustomRoutes/CategoryProductDesignPage'));
const Home08Page = React.lazy(() => import('./components/Pages/CustomRoutes/Home08Page'));
const DesignInternshipChallengePage = React.lazy(() => import('./components/Pages/CustomRoutes/DesignInternshipChallengePage'));
const JobApplyPage = React.lazy(() => import('./components/Pages/CustomRoutes/JobApplyPage'));
const CreatingWinningContentMarketingStrategyPage = React.lazy(() => import('./components/Pages/CustomRoutes/CreatingWinningContentMarketingStrategyPage'));
const BestFrequencyMarketingEmailsPage = React.lazy(() => import('./components/Pages/CustomRoutes/BestFrequencyMarketingEmailsPage'));
const PerfectFromBeginningToEndPage = React.lazy(() => import('./components/Pages/CustomRoutes/PerfectFromBeginningToEndPage'));
const TeamJavierMoralesPage = React.lazy(() => import('./components/Pages/CustomRoutes/TeamJavierMoralesPage'));
const WhatWeLikeAboutTeamworkPage = React.lazy(() => import('./components/Pages/CustomRoutes/WhatWeLikeAboutTeamworkPage'));
const DigitalMarketingStatsImpactPage = React.lazy(() => import('./components/Pages/CustomRoutes/DigitalMarketingStatsImpactPage'));
const VideoEditorInternshipChallengePage = React.lazy(() => import('./components/Pages/CustomRoutes/VideoEditorInternshipChallengePage'));
const MarketingAutomationLeadGenPage = React.lazy(() => import('./components/Pages/CustomRoutes/MarketingAutomationLeadGenPage'));
const TeamMeganOustinPage = React.lazy(() => import('./components/Pages/CustomRoutes/TeamMeganOustinPage'));
const IntroducingTecnologiaFortWorthPage = React.lazy(() => import('./components/Pages/CustomRoutes/IntroducingTecnologiaFortWorthPage'));
const AdditionalServicesGrowBusinessPage = React.lazy(() => import('./components/Pages/CustomRoutes/AdditionalServicesGrowBusinessPage'));
const DeathOfTraditionalMarketingPage = React.lazy(() => import('./components/Pages/CustomRoutes/DeathOfTraditionalMarketingPage'));
const TeamMatZalmanPage = React.lazy(() => import('./components/Pages/CustomRoutes/TeamMatZalmanPage'));
const MicrosoftTeamsProductivityPage = React.lazy(() => import('./components/Pages/CustomRoutes/MicrosoftTeamsProductivityPage'));
const ProductWebApplicationPage = React.lazy(() => import('./components/Pages/CustomRoutes/ProductWebApplicationPage'));
const PortfolioPhotoshopDesignPage = React.lazy(() => import('./components/Pages/CustomRoutes/PortfolioPhotoshopDesignPage'));
const AdvanceTabPage = React.lazy(() => import('./components/Pages/CustomRoutes/AdvanceTabPage'));
const PortfolioCustomEcommercePage = React.lazy(() => import('./components/Pages/CustomRoutes/PortfolioCustomEcommercePage'));
const CallToActionPage = React.lazy(() => import('./components/Pages/CustomRoutes/CallToActionPage'));
const ApplicationPage = React.lazy(() => import('./components/Pages/CustomRoutes/ApplicationPage'));
const CounterPage = React.lazy(() => import('./components/Pages/CustomRoutes/CounterPage'));
const ProductAppInstallmentPage = React.lazy(() => import('./components/Pages/CustomRoutes/ProductAppInstallmentPage'));
const SassLandingPage = React.lazy(() => import('./components/Pages/CustomRoutes/SassLandingPage'));
const ProgressbarPage = React.lazy(() => import('./components/Pages/CustomRoutes/ProgressbarPage'));
const TestimonialPage = React.lazy(() => import('./components/Pages/CustomRoutes/TestimonialPage'));
const Care100xPage = React.lazy(() => import('./components/Pages/CustomRoutes/Care100xPage'));
const Virtualtour = React.lazy(() => import('./components/Pages/CustomRoutes/Virtualtour'));
const HyproPage = React.lazy(() => import('./components/Pages/CustomRoutes/HyproPage'));
const NisaaPage = React.lazy(() => import('./components/Pages/CustomRoutes/NisaaPage'));
const MediTechPage = React.lazy(() => import('./components/Pages/CustomRoutes/MediTechPage'));

// Loading fallback component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    fontSize: '18px'
  }}>
    <div>Loading...</div>
  </div>
);

function App() {
  useEffect(() => {
    // Preload critical images for better performance
    preloadCriticalImages();
  }, []);

  return (
    <>
      {/* Super Performance Optimizations for 90% Faster Loading */}
      <CriticalCSS />
      <ServiceWorkerRegistration enableCaching={process.env.NODE_ENV === 'production'} />
      <ResourceOptimizer enablePreloading={true} />
      <MemoryOptimizer enableOptimization={true} />
      <PerformanceMonitor enableLogging={process.env.NODE_ENV === 'development'} />
      <WhatsAppButton />
      <Suspense fallback={<PageLoader />}>
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
          <Route path="products/meditech" element={<MediTechPage />} />
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
      </Suspense>
    </>
  );
}

export default App;
