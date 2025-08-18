/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Div from '../../Div';
import Spacing from '../../Spacing';

export default function HyproPage() {
  const [activeSolution, setActiveSolution] = useState('weblite');
  const [activeTech, setActiveTech] = useState('holographic');
  const [activeTwin, setActiveTwin] = useState('smart-city');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Initialize WOW.js if available
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <>
      {/* Video Hero Section */}
      <div className="video-hero-section">
        <div className="video-background">
          <video autoPlay muted loop playsInline>
            <source src="/video/vr1.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text-content hero-text-left">
            <div className="hero-main-title">
              <h1>Discover the future of Immersive 3D Experiences</h1>
            </div>
            <div className="hero-cta-buttons">
              <a href="#contact-form" className="hero-btn primary-btn">
                <span>Explore Now</span>
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Solutions Section */}
      <div className="interactive-solutions-section" id="explore">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-12">
              <div className="section-title text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                <div className="section-main-title">
                  <h2>Transform how Industries Showcase Properties<br />with our all-in-one Immersive Tools</h2>
                </div>
              </div>
            </Div>
          </Div>

          {/* Solution Buttons */}
          <Div className="row">
            <Div className="col-lg-12">
              <div className="solution-buttons text-center wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                <button
                  className={`solution-btn ${activeSolution === 'weblite' ? 'active' : ''}`}
                  onClick={() => setActiveSolution('weblite')}
                >
                  Weblite
                </button>
                <button
                  className={`solution-btn ${activeSolution === 'metaverse' ? 'active' : ''}`}
                  onClick={() => setActiveSolution('metaverse')}
                >
                  Metaverse
                </button>
                <button
                  className={`solution-btn ${activeSolution === 'sales-tool' ? 'active' : ''}`}
                  onClick={() => setActiveSolution('sales-tool')}
                >
                  Sales Tool
                </button>
                <button
                  className={`solution-btn ${activeSolution === 'vr-solutions' ? 'active' : ''}`}
                  onClick={() => setActiveSolution('vr-solutions')}
                >
                  VR Solutions
                </button>
                <button
                  className={`solution-btn ${activeSolution === 'ar-solutions' ? 'active' : ''}`}
                  onClick={() => setActiveSolution('ar-solutions')}
                >
                  AR Solutions
                </button>
              </div>
            </Div>
          </Div>

          {/* Content Container */}
          <Div className="row align-items-center">
            <Div className="col-lg-6 col-md-12">
              <div className="solution-video wow fadeInLeft" data-wow-delay="0.6s" data-wow-duration="1s">
                <div className="video-container">
                  <video id="solution-video" autoPlay muted loop playsInline>
                    <source src="/video/vr2.mp4" type="video/mp4" />
                  </video>
                  <div className="video-overlay">
                    {/* <div className="play-button">
                      <i className="bi bi-play-circle"></i>
                    </div> */}
                  </div>
                </div>
              </div>
            </Div>
            <Div className="col-lg-6 col-md-12">
              <div className="solution-content wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="1s">
                <div className={`solution-info ${activeSolution === 'weblite' ? '' : 'd-none'}`} id="weblite-content">
                  <h3>Interactive Storytelling</h3>
                  <p>Interactive web based platforms to visualize and explore properties within a realistic virtual environment.</p>
                  <div className="solution-stats">
                    <div className="stat-item">
                      <h4>400%</h4>
                      <p>Boost in Engagement</p>
                    </div>
                    <div className="stat-item">
                      <h4>30%</h4>
                      <p>Increase in Conversion</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>

                <div className={`solution-info ${activeSolution === 'metaverse' ? '' : 'd-none'}`} id="metaverse-content">
                  <h3>Real-time Interactive Models</h3>
                  <p>Explore properties through immersive 3D experiences with real-time interactive models and virtual walkthroughs.</p>
                  <div className="solution-stats">
                    <div className="stat-item">
                      <h4>70%</h4>
                      <p>Proactive Monitoring</p>
                    </div>
                    <div className="stat-item">
                      <h4>40%</h4>
                      <p>Faster Decisions</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>

                <div className={`solution-info ${activeSolution === 'sales-tool' ? '' : 'd-none'}`} id="sales-tool-content">
                  <h3>Remote Property Showcasing</h3>
                  <p>Remotely showcase properties in 3D with built-in voice/video calls for enhanced client engagement.</p>
                  <div className="solution-stats">
                    <div className="stat-item">
                      <h4>VR Solutions</h4>
                      <p>Immersive Walkthroughs</p>
                    </div>
                    <div className="stat-item">
                      <h4>AR Solutions</h4>
                      <p>Faster Decision Making</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>

                <div className={`solution-info ${activeSolution === 'vr-solutions' ? '' : 'd-none'}`} id="vr-solutions-content">
                  <h3>Virtual Reality Experiences</h3>
                  <p>Explore properties through immersive VR walkthroughs with realistic 3D environments and interactive elements.</p>
                  <div className="solution-stats">
                    <div className="stat-item">
                      <h4>360°</h4>
                      <p>Immersive Views</p>
                    </div>
                    <div className="stat-item">
                      <h4>Real-time</h4>
                      <p>Interaction</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>

                <div className={`solution-info ${activeSolution === 'ar-solutions' ? '' : 'd-none'}`} id="ar-solutions-content">
                  <h3>Augmented Reality Solutions</h3>
                  <p>Visualize projects with AR for faster decision making and enhanced spatial understanding.</p>
                  <div className="solution-stats">
                    <div className="stat-item">
                      <h4>AR</h4>
                      <p>Visualization</p>
                    </div>
                    <div className="stat-item">
                      <h4>Real-time</h4>
                      <p>Overlay</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>
              </div>
            </Div>
          </Div>
        </Div>
      </div>

      {/* Experience Projects Section */}
      <div className="experience-projects-section">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-12">
              <div className="section-title text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                <div className="section-main-title">
                  <h2>Experience Multiple Projects within One Room<br />at once through Immersive Tech</h2>
                </div>
              </div>
            </Div>
          </Div>

          {/* Technology Buttons */}
          <Div className="row">
            <Div className="col-lg-12">
              <div className="tech-buttons text-center wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                <button
                  className={`tech-btn ${activeTech === 'holographic' ? 'active' : ''}`}
                  onClick={() => setActiveTech('holographic')}
                >
                  Holographic Display
                </button>
                <button
                  className={`tech-btn ${activeTech === 'touchscreen' ? 'active' : ''}`}
                  onClick={() => setActiveTech('touchscreen')}
                >
                  Touchscreen
                </button>
                <button
                  className={`tech-btn ${activeTech === 'immersive-stations' ? 'active' : ''}`}
                  onClick={() => setActiveTech('immersive-stations')}
                >
                  Immersive Stations
                </button>
                <button
                  className={`tech-btn ${activeTech === 'projection-mapping' ? 'active' : ''}`}
                  onClick={() => setActiveTech('projection-mapping')}
                >
                  Projection Mapping
                </button>
                <button
                  className={`tech-btn ${activeTech === 'immersive-led' ? 'active' : ''}`}
                  onClick={() => setActiveTech('immersive-led')}
                >
                  Immersive LED Room
                </button>
              </div>
            </Div>
          </Div>

          {/* Content Container */}
          <Div className="row align-items-center">
            <Div className="col-lg-6 col-md-12">
              <div className="tech-content wow fadeInLeft" data-wow-delay="0.6s" data-wow-duration="1s">
                <div className={`tech-info ${activeTech === 'holographic' ? '' : 'd-none'}`} id="holographic-content">
                  <h3>High Res Digital Scale Models</h3>
                  <p>Real-time 3D virtual model of physical systems that helps visualize data and improve decision-making.</p>
                  <div className="tech-stats">
                    <div className="stat-item">
                      <h4>70%</h4>
                      <p>Proactive Monitoring</p>
                    </div>
                    <div className="stat-item">
                      <h4>40%</h4>
                      <p>Faster decisions</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>

                <div className={`tech-info ${activeTech === 'touchscreen' ? '' : 'd-none'}`} id="touchscreen-content">
                  <h3>Interactive Touch Displays</h3>
                  <p>Multi-touch interactive displays for collaborative project exploration and real-time data visualization.</p>
                  <div className="tech-stats">
                    <div className="stat-item">
                      <h4>Multi-touch</h4>
                      <p>Collaboration</p>
                    </div>
                    <div className="stat-item">
                      <h4>Real-time</h4>
                      <p>Interaction</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>

                <div className={`tech-info ${activeTech === 'immersive-stations' ? '' : 'd-none'}`} id="immersive-stations-content">
                  <h3>Immersive Workstations</h3>
                  <p>Dedicated immersive stations for detailed project analysis and virtual walkthroughs.</p>
                  <div className="tech-stats">
                    <div className="stat-item">
                      <h4>VR Ready</h4>
                      <p>Stations</p>
                    </div>
                    <div className="stat-item">
                      <h4>360°</h4>
                      <p>Experience</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>

                <div className={`tech-info ${activeTech === 'projection-mapping' ? '' : 'd-none'}`} id="projection-mapping-content">
                  <h3>3D Projection Mapping</h3>
                  <p>Advanced projection mapping technology for immersive spatial visualization and interactive experiences.</p>
                  <div className="tech-stats">
                    <div className="stat-item">
                      <h4>3D</h4>
                      <p>Mapping</p>
                    </div>
                    <div className="stat-item">
                      <h4>Spatial</h4>
                      <p>Visualization</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>

                <div className={`tech-info ${activeTech === 'immersive-led' ? '' : 'd-none'}`} id="immersive-led-content">
                  <h3>LED Immersive Rooms</h3>
                  <p>Full LED immersive rooms for complete project visualization and collaborative decision making.</p>
                  <div className="tech-stats">
                    <div className="stat-item">
                      <h4>Full LED</h4>
                      <p>Coverage</p>
                    </div>
                    <div className="stat-item">
                      <h4>Immersive</h4>
                      <p>Experience</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>
              </div>
            </Div>
            <Div className="col-lg-6 col-md-12">
              <div className="tech-video wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="1s">
                <div className="video-container">
                  <video id="tech-video" autoPlay muted loop playsInline>
                    <source src="/video/vr4.mp4" type="video/mp4" />
                  </video>
                  <div className="video-overlay">
                    {/* <div className="play-button">
                      <i className="bi bi-play-circle"></i>
                    </div> */}
                  </div>
                </div>
              </div>
            </Div>
          </Div>
        </Div>
      </div>

      {/* Smart Cities Section */}
      <div className="smart-cities-section">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-12">
              <div className="section-title text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                <div className="section-main-title">
                  <h2>High-Quality, Interactive and Life-like<br />Cities built for Smart Planning</h2>
                </div>
              </div>
            </Div>
          </Div>

          {/* City Images */}
          <Div className="row">
            <Div className="col-lg-4 col-md-4">
              <div className="city-item wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                <div className="city-image">
                  <img src="/images/img1.jpg" alt="Dubai" />
                  <div className="city-overlay">
                    <div className="city-name">

                    </div>
                  </div>
                </div>
              </div>
            </Div>
            <Div className="col-lg-4 col-md-4">
              <div className="city-item wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
                <div className="city-image">
                  <img src="/images/img2.jpg" alt="Abu Dhabi" />
                  <div className="city-overlay">
                    <div className="city-name">

                    </div>
                  </div>
                </div>
              </div>
            </Div>
            <Div className="col-lg-4 col-md-4">
              <div className="city-item wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1s">
                <div className="city-image">
                  <img src="/images/img3.jpg" alt="Riyadh" />
                  <div className="city-overlay">
                    <div className="city-name">

                    </div>
                  </div>
                </div>
              </div>
            </Div>
          </Div>
        </Div>
      </div>

      {/* Digital Twin Section */}
      <div className="experience-projects-section">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-12">
              <div className="section-title text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                <div className="section-main-title">
                  <h2>Build Digital twins for Real-Time Monitoring,Insights, and Management.</h2>
                </div>
              </div>
            </Div>
          </Div>

          {/* Technology Buttons */}
          <Div className="row">
            <Div className="col-lg-12">
              <div className="tech-buttons text-center wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                <button
                  className={`twin-btn ${activeTwin === 'smart-city' ? 'active' : ''}`}
                  onClick={() => setActiveTwin('smart-city')}
                >
                  Smart City
                </button>
                <button
                  className={`twin-btn ${activeTwin === 'smart-buildings' ? 'active' : ''}`}
                  onClick={() => setActiveTwin('smart-buildings')}
                >
                  Smart Buildings
                </button>
                <button
                  className={`twin-btn ${activeTwin === 'smart-house' ? 'active' : ''}`}
                  onClick={() => setActiveTwin('smart-house')}
                >
                  Smart House
                </button>
                <button
                  className={`twin-btn ${activeTwin === 'smart-port' ? 'active' : ''}`}
                  onClick={() => setActiveTwin('smart-port')}
                >
                  Smart Port
                </button>
                <button
                  className={`twin-btn ${activeTwin === 'smart-airport' ? 'active' : ''}`}
                  onClick={() => setActiveTwin('smart-airport')}
                >
                  Smart Airport
                </button>
              </div>
            </Div>
          </Div>

          {/* Content Container */}
          <Div className="row align-items-center">
            <Div className="col-lg-6 col-md-12">
              <div className="twin-content wow fadeInLeft" data-wow-delay="0.6s" data-wow-duration="1s">
                <div className={`twin-info ${activeTwin === 'smart-city' ? '' : 'd-none'}`} id="smart-city-content">
                  <h3>Reimagining Urban Planning</h3>
                  <p>Manage energy sources to futureproof your city for a thriving tomorrow with advanced digital twin technology.</p>
                  <div className="twin-stats">
                    <div className="stat-item">
                      <h4>30%</h4>
                      <p>Energy reduction</p>
                    </div>
                    <div className="stat-item">
                      <h4>20%</h4>
                      <p>Lesser maintenance</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>

                <div className={`twin-info ${activeTwin === 'smart-buildings' ? '' : 'd-none'}`} id="smart-buildings-content">
                  <h3>Smart Building Management</h3>
                  <p>Intelligent building systems with real-time monitoring and automated energy management for optimal efficiency.</p>
                  <div className="twin-stats">
                    <div className="stat-item">
                      <h4>60%</h4>
                      <p>Energy savings</p>
                    </div>
                    <div className="stat-item">
                      <h4>24/7</h4>
                      <p>Monitoring</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>

                <div className={`twin-info ${activeTwin === 'smart-house' ? '' : 'd-none'}`} id="smart-house-content">
                  <h3>Smart Home Automation</h3>
                  <p>Connected home systems with intelligent automation for comfort, security, and energy efficiency.</p>
                  <div className="twin-stats">
                    <div className="stat-item">
                      <h4>50%</h4>
                      <p>Cost reduction</p>
                    </div>
                    <div className="stat-item">
                      <h4>Smart</h4>
                      <p>Automation</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>

                <div className={`twin-info ${activeTwin === 'smart-port' ? '' : 'd-none'}`} id="smart-port-content">
                  <h3>Smart Port Operations</h3>
                  <p>Digital twin solutions for port management with real-time vessel tracking and cargo optimization.</p>
                  <div className="twin-stats">
                    <div className="stat-item">
                      <h4>45%</h4>
                      <p>Efficiency boost</p>
                    </div>
                    <div className="stat-item">
                      <h4>Real-time</h4>
                      <p>Tracking</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>

                <div className={`twin-info ${activeTwin === 'smart-airport' ? '' : 'd-none'}`} id="smart-airport-content">
                  <h3>Smart Airport Management</h3>
                  <p>Intelligent airport systems with passenger flow optimization and operational efficiency monitoring.</p>
                  <div className="twin-stats">
                    <div className="stat-item">
                      <h4>30%</h4>
                      <p>Wait time reduction</p>
                    </div>
                    <div className="stat-item">
                      <h4>Smart</h4>
                      <p>Operations</p>
                    </div>
                  </div>
                  <a href="#" className="know-more-btn">Know More</a>
                </div>
              </div>
            </Div>
            <Div className="col-lg-6 col-md-12">
              <div className="tech-video wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="1s">
                <div className="video-container">
                  <video id="tech-video" autoPlay muted loop playsInline>
                    <source src="/video/vr3.mp4" type="video/mp4" />
                  </video>
                  <div className="video-overlay">
                    {/* <div className="play-button">
                      <i className="bi bi-play-circle"></i>
                    </div> */}
                  </div>
                </div>
              </div>
            </Div>
          </Div>
        </Div>
      </div>

      {/* Gaming Solutions Section */}
      <div className="protfolio-area">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-12">
              <div className="section-title text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                <div className="section-sub-title">
                  <h4>Gaming Solutions</h4>
                </div>
                <div className="section-main-title">
                  <h2>Explore Unique Worlds That Challenge, Engage, and Reward</h2>
                </div>
              </div>
            </Div>
          </Div>
          <Div className="row">
            <Div className="col-lg-6 col-md-6">
              <div className="protfolio-single-box wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                <div className="protfolio-thumb">
                  <img src="/images/img44.jpg" alt="" />
                
                  <div className="protfolio-images-link">
                    <a href="projects-details.html"><i className="bi bi-play-circle"></i></a>
                  </div>
                </div>
              </div>
            </Div>
            <Div className="col-lg-6 col-md-6">
              <div className="protfolio-single-box wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                <div className="protfolio-thumb">
                  <img src="/images/img11.jpeg" alt="" />
                  <div className="protfolio-images-link">
                    <a href="projects-details.html"><i className="bi bi-play-circle"></i></a>
                  </div>
                </div>
              </div>
            </Div>
            <Div className="col-lg-8 col-md-12">
              <div className="protfolio-single-box wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
                <div className="protfolio-thumb">
                  <img src="/images/img22.jpeg" alt="" />
                  <div className="protfolio-images-link">
                    <a href="projects-details.html"><i className="bi bi-play-circle"></i></a>
                  </div>
                </div>
              </div>
            </Div>
            <Div className="col-lg-4 col-md-6">
              <div className="protfolio-single-box wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1s">
                <div className="protfolio-thumb">
                  <img src="/images/img55.jpg" alt="" />
                  <div className="protfolio-images-link">
                    <a href="projects-details.html"><i className="bi bi-play-circle"></i></a>
                  </div>
                </div>
              </div>
            </Div>
          </Div>
          {/* <Div className="row mt-5">
            <Div className="col-lg-12">
              <div className="gaming-stats text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                <Div className="row">
                  <Div className="col-lg-3 col-md-6">
                    <div className="stat-item">
                      <h3>400+ Million</h3>
                      <p>Active Accounts</p>
                    </div>
                  </Div>
                  <Div className="col-lg-3 col-md-6">
                    <div className="stat-item">
                      <h3>3.2 Billion</h3>
                      <p>Hours Played</p>
                    </div>
                  </Div>
                  <Div className="col-lg-3 col-md-6">
                    <div className="stat-item">
                      <h3>12.3 Million</h3>
                      <p>Concurrent Players</p>
                    </div>
                  </Div>
                  <Div className="col-lg-3 col-md-6">
                    <div className="stat-item">
                      <h3>58%</h3>
                      <p>Players Below 34 Years</p>
                    </div>
                  </Div>
                </Div>
              </div>
            </Div>
          </Div> */}
        </Div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section" id="contact-form">
        <Div className="container">
          <Div className="row justify-content-center">
            <Div className="col-lg-8 col-md-10">
              <div className="contact-form-wrapper">
                <div className="contact-form-header text-center">
                  <h3>Get In Touch</h3>
                  <p>Ready to transform your projects with immersive 3D experiences? Let's discuss your requirements.</p>
                </div>
                
                                 <form
                   className="contact-form"
                   onSubmit={async (e) => {
                     e.preventDefault();
                     setIsSubmitting(true);
                     setSubmitSuccess(false);

                     const formData = {
                       name: e.target.name.value,
                       email: e.target.email.value,
                       country_code: e.target.country_code.value,
                       phone: e.target.phone.value,
                       profession: e.target.profession.value,
                       company_name: e.target.company_name.value,
                       interested_products: e.target.interested_products.value,
                       project_type: e.target.project_type.value,
                       project_stage: e.target.project_stage.value,
                       request_type: e.target.request_type.value,
                       message: e.target.message.value,
                     };

                     try {
                       const res = await fetch("https://nexelvr-backend-4.onrender.com/submit", {
                         method: "POST",
                         headers: {
                           "Content-Type": "application/json",
                         },
                         body: JSON.stringify(formData),
                       });

                       const data = await res.json();
                       if (res.ok) {
                         setSubmitSuccess(true);
                         e.target.reset();
                         // Hide success message after 5 seconds
                         setTimeout(() => {
                           setSubmitSuccess(false);
                         }, 5000);
                       } else {
                         alert(data.error || "Submission failed");
                       }
                     } catch (err) {
                       alert("Error submitting form: " + err.message);
                     } finally {
                       setIsSubmitting(false);
                     }
                   }}
                 >
                  <div className="form-row">
                    <div className="form-group">
                      <input type="text" name="name" className="form-control" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" className="form-control" placeholder="Enter Email Address" required />
                    </div>
                  </div>
                  
                  <div className="form-group phone-group">
                    <div className="country-selector">
                      <select name="country_code" className="form-control country-select" id="country-select">
                        <option value="+971">🇦🇪 UAE (+971)</option>
                        <option value="+1">🇺🇸 USA (+1)</option>
                        <option value="+44">🇬🇧 UK (+44)</option>
                        <option value="+91">🇮🇳 India (+91)</option>
                        <option value="+966">🇸🇦 Saudi Arabia (+966)</option>
                        <option value="+974">🇶🇦 Qatar (+974)</option>
                        <option value="+973">🇧🇭 Bahrain (+973)</option>
                        <option value="+965">🇰🇼 Kuwait (+965)</option>
                        <option value="+968">🇴🇲 Oman (+968)</option>
                      </select>
                    </div>
                    <div className="phone-input">
                      <input type="text" name="phone" className="form-control" id="phone-number" placeholder="Enter phone number" required />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <select name="profession" className="form-control" required>
                        <option value="">Profession</option>
                        <option value="Real Estate Developer">Real Estate Developer</option>
                        <option value="Architect">Architect</option>
                        <option value="Property Manager">Property Manager</option>
                        <option value="Interior Designer">Interior Designer</option>
                        <option value="Construction Manager">Construction Manager</option>
                        <option value="Investor">Investor</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input type="text" name="company_name" className="form-control" placeholder="Company Name" required />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <select name="interested_products" className="form-control" required>
                        <option value="">Interested Products</option>
                        <option value="Weblite">Weblite</option>
                        <option value="Metaverse">Metaverse</option>
                        <option value="Sales Tool">Sales Tool</option>
                        <option value="VR Solutions">VR Solutions</option>
                        <option value="AR Solutions">AR Solutions</option>
                        <option value="Digital Twin">Digital Twin</option>
                        <option value="Gaming Solutions">Gaming Solutions</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select name="project_type" className="form-control" required>
                        <option value="">Type of Project working on</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Mixed Use">Mixed Use</option>
                        <option value="Infrastructure">Infrastructure</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <select name="project_stage" className="form-control" required>
                        <option value="">Current stage of project</option>
                        <option value="Planning">Planning</option>
                        <option value="Development">Development</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Construction">Construction</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select name="request_type" className="form-control" required>
                        <option value="">What would you like to receive from us?</option>
                        <option value="Demo">Demo</option>
                        <option value="Pricing">Pricing</option>
                        <option value="Consultation">Consultation</option>
                        <option value="Custom Solution">Custom Solution</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <textarea name="message" className="form-control" rows="4" placeholder="Tell us more about your project requirements..." required></textarea>
                  </div>
                  
                                     <button type="submit" className="submit-btn" disabled={isSubmitting}>
                     {isSubmitting ? (
                       <>
                         <div className="loading-spinner"></div>
                         <span>Submitting...</span>
                       </>
                     ) : (
                       <>
                         <span>Submit Request</span>
                         <i className="bi bi-arrow-right"></i>
                       </>
                     )}
                   </button>
                   
                   {submitSuccess && (
                     <div className="success-message">
                       <i className="bi bi-check-circle"></i>
                       <span>Form submitted successfully!</span>
                     </div>
                   )}
                </form>
              </div>
            </Div>
          </Div>
        </Div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-12">
              <div className="newsletter-content text-center">
                <h3>Subscribe to our Newsletter</h3>
                <p>Stay ahead with the latest innovations and developments in immersive 3D and digital twins – explore our work</p>
                <div className="newsletter-form">
                  <form>
                    <div className="input-group">
                      <input type="email" className="form-control" placeholder="Enter your email address" />
                      <button type="submit" className="btn btn-primary">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </Div>
          </Div>
        </Div>
      </div>

      <style>{`

           
                     /* Contact Form Section */
                       .contact-form-section {
              padding: 100px 0;
              margin: 100px 0;
              background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
              position: relative;
            }

          .contact-form-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(0,0,0,0.02)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.5;
          }

          .contact-form-wrapper {
            position: relative;
            z-index: 2;
            background: white;
            border-radius: 20px;
            padding: 60px 40px;
            max-width: 800px;
            margin: 0 auto;
          }

          .contact-form-header {
            margin-bottom: 40px;
          }

          .contact-form-header h3 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 15px;
            background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .contact-form-header p {
            font-size: 1.1rem;
            color: #666;
            margin: 0;
            line-height: 1.6;
          }

          .contact-form {
            width: 100%;
            margin:100px;
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-control {
            width: 100%;
            height: 54px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            padding: 0 15px;
            font-size: 1rem;
            background: #f9fafb;
            transition: all 0.3s ease;
            color: #333;
          }

          .form-control:focus {
            outline: none;
            border-color: #ff0000;
            box-shadow: 0 0 0 4px rgba(255, 0, 0, 0.1);
            background: white;
            transform: translateY(-2px);
          }

          .form-control::placeholder {
            color: #999;
            font-weight: 400;
          }

          textarea.form-control {
            min-height: 120px;
            padding-top: 15px;
            resize: vertical;
          }

          .phone-group {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 15px;
          }

          .country-selector {
            position: relative;
          }

                     .country-select {
             background-image: none;
             padding-right: 15px;
             appearance: none;
             -webkit-appearance: none;
             -moz-appearance: none;
             font-size: 14px;
             line-height: 1.2;
             cursor: pointer;
             position: relative;
             z-index: 10;
             height: 54px;
             border: 2px solid #e2e8f0;
             border-radius: 12px;
             padding: 0 15px;
             background-color: #f9fafb;
             color: #333;
             transition: all 0.3s ease;
           }

          .country-select:focus {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23333' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
            outline: none;
            border-color: #333;
            box-shadow: 0 0 0 4px rgba(51, 51, 51, 0.1);
            background-color: white;
            transform: translateY(-2px);
          }

                     .country-select option {
             font-size: 14px;
             padding: 8px;
             line-height: 1.2;
             background: white;
             color: #333;
             border: none;
             outline: none;
           }

           .country-select,
           .country-select option {
             font-family: "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "Android Emoji", "EmojiSymbols", "EmojiOne Mozilla", "Twemoji Mozilla", "Segoe UI Symbol", Arial, sans-serif;
           }

          .submit-btn {
            width: 100%;
            background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
            color: white;
            border: none;
            padding: 16px 30px;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 8px 20px rgba(255, 0, 0, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          .submit-btn:hover {
            background: linear-gradient(135deg, #cc0000 0%, #990000 100%);
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(255, 0, 0, 0.3);
          }

          .submit-btn i {
            font-size: 1.2rem;
            transition: transform 0.3s ease;
          }

                     .submit-btn:hover i {
             transform: translateX(5px);
           }

           /* Loading and Success States */
           .submit-btn:disabled {
             opacity: 0.7;
             cursor: not-allowed;
             transform: none;
           }

           .submit-btn:disabled:hover {
             transform: none;
             box-shadow: 0 8px 20px rgba(255, 0, 0, 0.2);
           }

           .loading-spinner {
             width: 20px;
             height: 20px;
             border: 2px solid rgba(255, 255, 255, 0.3);
             border-top: 2px solid white;
             border-radius: 50%;
             animation: spin 1s linear infinite;
             margin-right: 10px;
           }

           @keyframes spin {
             0% { transform: rotate(0deg); }
             100% { transform: rotate(360deg); }
           }

           .success-message {
             display: flex;
             align-items: center;
             justify-content: center;
             gap: 10px;
             background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
             color: white;
             padding: 15px 20px;
             border-radius: 12px;
             margin-top: 20px;
             font-weight: 600;
             animation: slideInUp 0.5s ease-out;
             box-shadow: 0 8px 20px rgba(40, 167, 69, 0.3);
           }

           .success-message i {
             font-size: 1.2rem;
             animation: bounce 0.6s ease-out;
           }

           @keyframes slideInUp {
             from {
               opacity: 0;
               transform: translateY(20px);
             }
             to {
               opacity: 1;
               transform: translateY(0);
             }
           }

           @keyframes bounce {
             0%, 20%, 50%, 80%, 100% {
               transform: translateY(0);
             }
             40% {
               transform: translateY(-10px);
             }
             60% {
               transform: translateY(-5px);
             }
           }

                     /* Responsive Design for Contact Form */
           @media (max-width: 768px) {
             .contact-form-section {
               padding: 20px 0;
               margin: 0;
             }
             
             .contact-form {
               margin: 0 !important;
             }
            
            .contact-form-wrapper {
              padding: 25px 15px;
              margin: 0 8px;
              border-radius: 12px;
              max-width: 100%;
            }
            
            .contact-form-header h3 {
              font-size: 1.6rem;
              margin-bottom: 8px;
            }
            
            .contact-form-header p {
              font-size: 0.9rem;
              line-height: 1.4;
              margin-bottom: 20px;
            }
            
            .form-row {
              grid-template-columns: 1fr;
              gap: 12px;
              margin-bottom: 12px;
            }
            
            .form-group {
              margin-bottom: 12px;
              width: 100%;
              max-width: none;
              display: block;
            }
            
            .phone-group {
              grid-template-columns: 1fr;
              gap: 8px;
              width: 100%;
              max-width: none;
              margin: 0;
            }
            
                         .country-selector {
               order: 2;
             }
             
             .phone-input {
               order: 1;
             }
             
                           .country-select {
                background-image: none;
                padding-right: 15px;
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                font-size: 14px;
                line-height: 1.2;
                cursor: pointer;
                position: relative;
                z-index: 10;
                height: 50px;
                padding: 15px;
                width: 100%;
                box-sizing: border-box;
                line-height: 20px;
                color: #333;
                vertical-align: middle;
                display: block;
                border: 2px solid #e2e8f0;
                border-radius: 12px;
                background-color: #f9fafb;
                transition: all 0.3s ease;
              }
             
             .country-select option {
               font-size: 14px;
               padding: 8px;
               line-height: 1.2;
               background: white;
               color: #333;
               border: none;
               outline: none;
             }
            
            .form-control {
              height: 50px;
              font-size: 16px;
              padding: 15px;
              width: 100%;
              box-sizing: border-box;
              line-height: 20px;
              color: #333;
              vertical-align: middle;
              display: block;
              border: 2px solid #e2e8f0;
              border-radius: 12px;
              background: #f9fafb;
            }
            
            textarea.form-control {
              min-height: 100px;
              padding: 15px;
              line-height: 24px;
              color: #333;
              vertical-align: top;
              resize: vertical;
              border: 2px solid #e2e8f0;
              border-radius: 12px;
              background: #f9fafb;
            }
            
                         .submit-btn {
               padding: 14px 20px;
               font-size: 1rem;
               width: 100%;
               max-width: none;
               margin: 15px auto 0;
             }
             
             .loading-spinner {
               width: 18px;
               height: 18px;
               margin-right: 8px;
             }
             
             .success-message {
               padding: 12px 16px;
               font-size: 0.9rem;
               margin-top: 15px;
             }
            
            .form-control::placeholder {
              color: #999 !important;
              opacity: 1 !important;
              font-size: 16px !important;
              line-height: 20px !important;
              font-weight: 400 !important;
            }
            
            .form-control:focus::placeholder {
              color: #ccc !important;
            }
            
            .form-control:focus {
              outline: none;
              border-color: #ff0000;
              box-shadow: 0 0 0 4px rgba(255, 0, 0, 0.1);
              background: white;
            }
          }

          @media (max-width: 576px) {
            .contact-form-section {
              padding: 15px 0;
              margin: 0;
            }
            
            .contact-form {
              margin: 0 !important;
            }
            
            .contact-form-wrapper {
              padding: 20px 12px;
              margin: 0 5px;
              border-radius: 10px;
              max-width: 100%;
            }
            
            .contact-form-header h3 {
              font-size: 1.4rem;
              margin-bottom: 6px;
            }
            
            .contact-form-header p {
              font-size: 0.85rem;
              line-height: 1.3;
              margin-bottom: 15px;
            }
            
            .form-row {
              gap: 10px;
              margin-bottom: 10px;
            }
            
            .form-group {
              margin-bottom: 10px;
              width: 100%;
              max-width: none;
            }
            
            .form-control {
              height: 48px;
              font-size: 16px;
              padding: 12px;
              width: 100%;
              box-sizing: border-box;
              line-height: 24px;
              color: #333;
              vertical-align: middle;
              display: block;
              border: 2px solid #e2e8f0;
              border-radius: 12px;
              background: #f9fafb;
            }
            
            textarea.form-control {
              min-height: 90px;
              padding: 12px;
              line-height: 20px;
              color: #333;
              vertical-align: top;
              resize: vertical;
              border: 2px solid #e2e8f0;
              border-radius: 12px;
              background: #f9fafb;
            }
            
                         .phone-group {
               gap: 6px;
               width: 100%;
               max-width: none;
             }
             
                           .country-select {
                background-image: none;
                padding-right: 12px;
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                font-size: 14px;
                line-height: 1.2;
                cursor: pointer;
                position: relative;
                z-index: 10;
                height: 48px;
                padding: 12px;
                width: 100%;
                box-sizing: border-box;
                line-height: 24px;
                color: #333;
                vertical-align: middle;
                display: block;
                border: 2px solid #e2e8f0;
                border-radius: 12px;
                background-color: #f9fafb;
                transition: all 0.3s ease;
              }
             
             .country-select option {
               font-size: 14px;
               padding: 8px;
               line-height: 1.2;
               background: white;
               color: #333;
               border: none;
               outline: none;
             }
            
                         .submit-btn {
               padding: 12px 18px;
               font-size: 0.9rem;
               margin: 12px auto 0;
               width: 100%;
             }
             
             .loading-spinner {
               width: 16px;
               height: 16px;
               margin-right: 6px;
             }
             
             .success-message {
               padding: 10px 14px;
               font-size: 0.85rem;
               margin-top: 12px;
             }
            
            .form-control::placeholder {
              color: #999 !important;
              opacity: 1 !important;
              font-size: 16px !important;
              line-height: 20px !important;
              font-weight: 400 !important;
            }
            
            .form-control:focus::placeholder {
              color: #ccc;
            }
          }

        /* Video Hero Section */
        .video-hero-section {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%);
        }

        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .video-background video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 100%);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          color: white;
          padding: 0 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-main-title h1 {
          font-size: 5rem;
          font-weight: 900;
          margin-bottom: 50px;
          line-height: 1.1;
          text-shadow: 3px 3px 6px rgba(0,0,0,0.7);
          color: #ffffff;
          letter-spacing: -1px;
        }

        .hero-cta-buttons {
          margin-top: 60px;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          background: #ff0000;
          color: white;
          padding: 15px 30px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          border: none;
          margin: 0;
          box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
          text-transform: none;
          letter-spacing: 0.3px;
        }

        .hero-btn:hover {
          background: #cc0000;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 0, 0, 0.4);
        }

        .hero-btn i {
          margin-left: 15px;
          font-size: 22px;
          transition: transform 0.3s ease;
        }

        .hero-btn:hover i {
          transform: translateX(5px);
        }

        /* Interactive Solutions Section */
        .interactive-solutions-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          position: relative;
        }

        .interactive-solutions-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #e9ecef 50%, transparent 100%);
        }

        .solution-buttons {
          margin-bottom: 80px;
          text-align: center;
        }

        .solution-btn {
          background: transparent;
          border: 2px solid #ff0000;
          color: #ff0000;
          padding: 15px 30px;
          margin: 0 12px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
        }

        .solution-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .solution-btn:hover::before {
          left: 100%;
        }

        .solution-btn:hover,
        .solution-btn.active {
          background: linear-gradient(135deg, #f82222c8 0%, #ff0000 100%);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 0, 0, 0.3);
          border-color: #ff0000;
        }

        .video-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
          transform: perspective(1000px) rotateY(-5deg);
          transition: all 0.4s ease;
          height: 100%;
          min-height: 500px;
          flex: 1;
        }

        .video-container:hover {
          transform: perspective(1000px) rotateY(0deg) scale(1.02);
          box-shadow: 0 30px 60px rgba(0,0,0,0.2);
        }

        .video-container video {
          width: 100%;
          height: 450px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .video-container:hover video {
          transform: scale(1.05);
        }

        .video-container .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .play-button {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(255, 0, 0, 0.4);
          position: relative;
          overflow: hidden;
        }

        .play-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }

        .play-button:hover::before {
          transform: translateX(100%);
        }

        .play-button i {
          font-size: 2.5rem;
          color: white;
          transition: all 0.3s ease;
          z-index: 2;
        }
          

        .play-button:hover {
          background: linear-gradient(135deg, #cc0000 0%, #990000 100%);
          transform: scale(1.15);
          box-shadow: 0 15px 40px rgba(255, 0, 0, 0.6);
        }

        .play-button:hover i {
          transform: scale(1.2);
        }

        .solution-content {
          padding: 40px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          height: 100%;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }

        .solution-info h3 {
          color: #1a1a1a;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 25px;
          line-height: 1.2;
          background: linear-gradient(135deg, #ef2323 0%, #ff0000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .solution-info p {
          color: #555;
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 35px;
          font-weight: 400;
        }

        .solution-stats {
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .solution-stats .stat-item {
          text-align: center;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 25px 20px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          border: 1px solid rgba(255, 0, 0, 0.1);
          transition: all 0.3s ease;
          min-width: 150px;
          flex: 1;
          max-width: 200px;
        }

        .solution-stats .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(255, 0, 0, 0.15);
          border-color: rgba(255, 0, 0, 0.3);
        }

        .solution-stats .stat-item h4 {
          color: #ff0000;
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 8px;
          text-shadow: 0 2px 4px rgba(255, 0, 0, 0.1);
        }

        .solution-stats .stat-item p {
          color: #555;
          font-size: 14px;
          margin: 0;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .know-more-btn {
          display: inline-block;
          background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
          color: white;
          padding: 15px 35px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 700;
          font-size: 16px;
          transition: all 0.4s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 10px 25px rgba(255, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }

        .know-more-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .know-more-btn:hover::before {
          left: 100%;
        }

        .know-more-btn:hover {
          background: linear-gradient(135deg, #cc0000 0%, #990000 100%);
          transform: translateY(-3px);
          color: white;
          box-shadow: 0 15px 35px rgba(255, 0, 0, 0.4);
        }

        .d-none {
          display: none !important;
        }

        /* Section Title Styles - Making only specific headings black */
        .interactive-solutions-section .section-title .section-main-title h2 {
          color: #000000 !important;
        }

        .smart-cities-section .section-title .section-main-title h2 {
          color: #000000 !important;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-main-title h1 {
            font-size: 2.5rem;
          }
          
          .solution-btn {
            margin: 5px;
            padding: 10px 20px;
            font-size: 14px;
          }
          
          .solution-stats {
            flex-direction: row;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .know-more-btn {
            display: block;
            width: auto;
            margin: 0 auto;
            text-align: center;
            max-width: 280px;
          }
        }

                 @media (max-width: 576px) {
           .hero-main-title h1 {
             font-size: 2rem;
           }
           
           .video-container video {
             height: 300px;
           }
           
           .know-more-btn {
             padding: 12px 25px;
             font-size: 14px;
             max-width: 250px;
           }
         }

         /* Experience Projects Section */
         .experience-projects-section {
           padding: 80px 0;
           background: #000000;
           color: white;
         }

         .experience-projects-section .container {
           max-width: 1200px;
           margin: 0 auto;
           padding: 0 30px;
         }

         /* Tech Buttons Layout */
         .tech-buttons {
           margin-bottom: 60px;
           text-align: center;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           gap: 15px;
           padding: 0 20px;
         }

         .tech-btn, .twin-btn {
           flex: 0 0 auto;
           min-width: 180px;
           margin: 0;
           background: transparent;
           border: 2px solid #ff0000;
           color: #ff0000;
           padding: 12px 25px;
           margin: 0 10px;
           border-radius: 25px;
           font-weight: 600;
           transition: all 0.3s ease;
           cursor: pointer;
         }

         .tech-btn:hover, .twin-btn:hover,
         .tech-btn.active, .twin-btn.active {
           background: #ff0000;
           color: white;
           transform: translateY(-2px);
         }

         .tech-content, .twin-content {
           padding: 40px;
           background: rgba(255, 255, 255, 0.95);
           border-radius: 20px;
           box-shadow: 0 20px 40px rgba(0,0,0,0.1);
           backdrop-filter: blur(10px);
           border: 1px solid rgba(255, 255, 255, 0.2);
           height: 100%;
           min-height: 500px;
           display: flex;
           flex-direction: column;
           justify-content: center;
           flex: 1;
         }

         .tech-info h3, .twin-info h3 {
           color: #1a1a1a;
           font-size: 2.5rem;
           font-weight: 800;
           margin-bottom: 25px;
           line-height: 1.2;
           background: linear-gradient(135deg, #ef2323 0%, #ff0000 100%);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
           background-clip: text;
         }

         .tech-info p, .twin-info p {
           color: #555;
           font-size: 18px;
           line-height: 1.7;
           margin-bottom: 35px;
           font-weight: 400;
         }

         .tech-stats, .twin-stats {
           display: flex;
           gap: 40px;
           margin-bottom: 40px;
           flex-wrap: wrap;
               justify-content: space-around;
         }

         .tech-stats .stat-item, .twin-stats .stat-item {
           text-align: center;
           background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
           padding: 25px 20px;
           border-radius: 15px;
           box-shadow: 0 10px 25px rgba(0,0,0,0.08);
           border: 1px solid rgba(255, 0, 0, 0.1);
           transition: all 0.3s ease;
           min-width: 150px;
           flex: 1;
           max-width: 200px;
         }

         .tech-stats .stat-item:hover, .twin-stats .stat-item:hover {
           transform: translateY(-5px);
           box-shadow: 0 15px 35px rgba(255, 0, 0, 0.15);
           border-color: rgba(255, 0, 0, 0.3);
         }

         .tech-stats .stat-item h4, .twin-stats .stat-item h4 {
           color: #ff0000;
           font-size: 1.5rem;
           font-weight: 800;
           margin-bottom: 8px;
           text-shadow: 0 2px 4px rgba(255, 0, 0, 0.1);
         }

         .tech-stats .stat-item p, .twin-stats .stat-item p {
           color: #555;
           font-size: 14px;
           margin: 0;
           font-weight: 600;
           text-transform: uppercase;
           letter-spacing: 0.5px;
         }

         /* Smart Cities Section */
         .smart-cities-section {
           padding: 100px 0;
           background: #f8f9fa;
         }

         .city-item {
           margin-bottom: 40px;
           cursor: pointer;
         }

         .city-image {
           position: relative;
           border-radius: 15px;
           overflow: hidden;
           box-shadow: 0 15px 30px rgba(0,0,0,0.1);
           transition: all 0.4s ease;
           height: 400px;
         }

         .city-image:hover {
           transform: translateY(-10px);
           box-shadow: 0 25px 50px rgba(0,0,0,0.2);
         }

         .city-image img {
           width: 100%;
           height: 100%;
           object-fit: cover;
           transition: transform 0.4s ease;
         }

         .city-image:hover img {
           transform: scale(1.1);
         }

         .city-overlay {
           position: absolute;
           top: 0;
           left: 0;
           right: 0;
           bottom: 0;
           background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%);
           display: flex;
           align-items: center;
           justify-content: center;
           transition: all 0.4s ease;
         }

         .city-image:hover .city-overlay {
           background: linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%);
         }

        //  .city-name h3 {
        //    color: #ffffff;
        //    font-size: 2.5rem;
        //    font-weight: 700;
        //    margin: 0;
        //    text-align: center;
        //    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        //    transition: all 0.4s ease;
        //  }

         .city-image:hover .city-name h3 {
           transform: scale(1.1);
           text-shadow: 3px 3px 6px rgba(0,0,0,0.7);
         }

         /* Gaming Section */
         .protfolio-area {
           background: #ffffff !important;
           padding: 120px 0 90px;
           color: rgb(0, 0, 0);
         }

         .protfolio-area .section-title h2,
         .protfolio-area .section-title h4 {
           color: rgb(3, 3, 3) !important;
         }

         .protfolio-area .gaming-stats .stat-item h3 {
           color: #ff0000 !important;
         }

         .protfolio-area .gaming-stats .stat-item p {
           color: rgb(0, 0, 0) !important;
         }

         .protfolio-single-box {
           margin-bottom: 30px;
         }

         .protfolio-thumb img {
           width: 100%;
         }

         .protfolio-thumb {
           position: relative;
           overflow: hidden;
         }

         .protfolio-thumb img:nth-child(1) {
           transition: transform 0.8s;
         }

         .protfolio-thumb img:nth-child(2),
         .protfolio-thumb img:nth-child(3) {
           position: absolute;
           top: 0;
           z-index: 3;
           transition: transform 1.6s;
         }

         .protfolio-thumb img:nth-child(2) {
           left: 0;
           clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
         }

         .protfolio-thumb img:nth-child(3) {
           right: 0;
           clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
         }

         .protfolio-single-box:hover .protfolio-thumb img:nth-child(1) {
           transform: scale(1.3);
         }

         .protfolio-single-box:hover .protfolio-thumb img:nth-child(2) {
           transform: translateX(-700px) skewX(40deg);
         }

         .protfolio-single-box:hover .protfolio-thumb img:nth-child(3) {
           transform: translateX(700px) skewX(-40deg);
         }

         .protfolio-images-link {
           display: flex;
           width: 100%;
           height: 100%;
           position: absolute;
           background: rgba(14, 19, 23, 0.8);
           top: 0;
           left: 0;
           justify-content: center;
           align-items: center;
           opacity: 0;
           transform: translateY(-20%);
           transition: opacity 500ms ease, transform 500ms ease;
         }

         .protfolio-single-box:hover .protfolio-images-link {
           opacity: 1;
           transform: translateY(0);
         }

         .protfolio-images-link a {
           color: #fff;
           font-size: 30px;
         }

         .gaming-stats {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
           gap: 30px;
           margin-top: 60px;
         }

         .gaming-stats .stat-item {
           background: white;
           padding: 40px 30px;
           border-radius: 15px;
           text-align: center;
           box-shadow: 0 10px 30px rgba(0,0,0,0.1);
           transition: transform 0.3s ease;
         }

         .gaming-stats .stat-item:hover {
           transform: translateY(-5px);
         }

         .gaming-stats .stat-item h3 {
           color: #ff0000;
           font-size: 2.5rem;
           font-weight: 700;
           margin-bottom: 10px;
         }

         .gaming-stats .stat-item p {
           color: #666;
           font-size: 16px;
           margin: 0;
           font-weight: 500;
         }

         /* Responsive adjustments */
         @media (max-width: 768px) {
           .tech-buttons {
             flex-direction: column;
             align-items: center;
           }
           
           .tech-btn, .twin-btn {
             min-width: 200px;
             margin-bottom: 10px;
           }
           
           .experience-projects-section .col-lg-6 {
             margin-bottom: 20px;
           }
           
           .tech-content, .twin-content {
             padding: 30px;
           }
           
           .gaming-stats {
             grid-template-columns: repeat(2, 1fr);
           }
         }

                   @media (max-width: 576px) {
            .gaming-stats {
              grid-template-columns: 1fr;
            }
          }

                     /* Contact Form Section */
           .contact-form-section {
             padding: 100px 0;
             background: #000000;
             position: relative;
           }

           .contact-form-section::before {
             content: '';
             position: absolute;
             top: 0;
             left: 0;
             right: 0;
             bottom: 0;
             background: #000000;
             z-index: 1;
           }

          .contact-form-section .container {
            position: relative;
            z-index: 2;
          }

          .contact-form-section .row {
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
            margin: 0;
          }

          /* Left Side - Dark Background */
          .contact-content {
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            color: white;
            padding: 80px 60px;
            min-height: 1200px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            position: relative;
          }

          .contact-content::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.03)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.5;
          }

          .contact-main-title {
            position: relative;
            z-index: 2;
          }

          .contact-main-title h2 {
            font-size: 3rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 50px;
            margin-top: 0;
            color: white;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          }

          .contact-features {
            margin-bottom: 60px;
            position: relative;
            z-index: 2;
            flex: 1;
          }

          .feature-item {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            gap: 20px;
            transition: transform 0.3s ease;
          }

          .feature-item:hover {
            transform: translateX(10px);
          }

          .feature-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 0 8px 20px rgba(255, 0, 0, 0.3);
            transition: all 0.3s ease;
          }

          .feature-icon:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 30px rgba(255, 0, 0, 0.4);
          }

          .feature-icon i {
            font-size: 1.5rem;
            color: white;
          }

          .feature-text h4 {
            color: white;
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          }

          /* Right Side - White Background Contact Form */
          .contact-form-container {
            background: white;
            padding: 80px 60px;
            min-height: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .contact-form {
            width: 100%;
            max-width: 500px;
          }

          .contact-form h3 {
            color: #000000;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 40px;
            text-align: center;
            position: relative;
          }

          .contact-form h3::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #ff0000, #cc0000);
            border-radius: 2px;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-control {
            width: 100%;
            padding: 15px 20px;
            border: 2px solid #f0f0f0;
            border-radius: 12px;
            font-size: 1rem;
            transition: all 0.3s ease;
            background: white;
            color: #333;
          }

          .form-control:focus {
            outline: none;
            border-color: #ff0000;
            box-shadow: 0 0 0 4px rgba(255, 0, 0, 0.1);
            transform: translateY(-2px);
          }

          .form-control::placeholder {
            color: #999;
            font-weight: 400;
          }

          .phone-group {
            display: flex;
            gap: 12px;
          }

          .country-selector {
            flex: 0 0 140px;
          }

          .phone-input {
            flex: 1;
          }

          .country-selector .form-control {
            text-align: left;
            padding-left: 15px;
            font-size: 0.9rem;
          }

          .phone-input .form-control {
            text-align: left;
            padding-left: 15px;
          }

          .country-select {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
            background-position: right 8px center;
            background-repeat: no-repeat;
            background-size: 16px 12px;
            padding-right: 40px;
            appearance: none;
            font-size: 14px;
            line-height: 1.2;
          }

          .country-select:focus {
            background-image: none;
            outline: none;
            border-color: #333;
            box-shadow: 0 0 0 4px rgba(51, 51, 51, 0.1);
            background-color: white;
            transform: translateY(-2px);
          }

          .country-select option {
            font-size: 14px;
            padding: 8px;
            line-height: 1.2;
          }

          /* Ensure flags display properly in all browsers */
          .country-select,
          .country-select option {
            font-family: "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "Android Emoji", "EmojiSymbols", "EmojiOne Mozilla", "Twemoji Mozilla", "Segoe UI Symbol", Arial, sans-serif;
          }

          .submit-btn {
            width: 100%;
            background: linear-gradient(135deg, #000000 0%, #333333 100%);
            color: white;
            border: none;
            padding: 16px 30px;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }

          .submit-btn:hover {
            background: linear-gradient(135deg, #333333 0%, #000000 100%);
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
          }

          /* Newsletter Section */
          .newsletter-section {
            background: linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 100%);
            padding: 80px 0;
            color: white;
          }

          .newsletter-content h3 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: black;
          }

          .newsletter-content p {
            font-size: 1.1rem;
            color: rgba(0, 0, 0, 0.9);
            margin-bottom: 40px;
          }

          .newsletter-form {
            max-width: 500px;
            margin: 0 auto;
          }

          .newsletter-form .input-group {
            background: white;
            border-radius: 50px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
          }

          .newsletter-form .form-control {
            border: none;
            padding: 15px 25px;
            font-size: 1rem;
            background: transparent;
          }

          .newsletter-form .form-control:focus {
            box-shadow: none;
            outline: none;
          }

          .newsletter-form .btn {
            background: linear-gradient(135deg, #ff0000, #ff6b6b);
            border: none;
            padding: 15px 30px;
            font-weight: 600;
            border-radius: 0 50px 50px 0;
            transition: all 0.3s ease;
          }

          .newsletter-form .btn:hover {
            background: linear-gradient(135deg, #ff6b6b, #ff0000);
            transform: translateX(5px);
          }

          /* Responsive Design for Contact Form */
          @media (max-width: 1200px) {
            .contact-content,
            .contact-form-container {
              padding: 60px 40px;
            }
            
            .contact-main-title h2 {
              font-size: 2.5rem;
            }
            
            .contact-form h3 {
              font-size: 2rem;
            }
          }

          @media (max-width: 991px) {
            .contact-form-section {
              padding: 60px 0;
            }
            
            .contact-content,
            .contact-form-container {
              padding: 50px 30px;
            }
            
            .contact-main-title h2 {
              font-size: 2.2rem;
              margin-bottom: 40px;
            }
            
            .contact-form h3 {
              font-size: 1.8rem;
            }
            
            .feature-item {
              margin-bottom: 25px;
            }
            
            .feature-icon {
              width: 50px;
              height: 50px;
            }
            
            .feature-icon i {
              font-size: 1.3rem;
            }
          }

          @media (max-width: 768px) {
            .contact-content,
            .contact-form-container {
              padding: 40px 25px;
            }
            
            .contact-main-title h2 {
              font-size: 1.8rem;
            }
            
            .contact-form h3 {
              font-size: 1.6rem;
            }
            
            .feature-item {
              margin-bottom: 20px;
            }
            
            .feature-icon {
              width: 45px;
              height: 45px;
            }
            
            .feature-icon i {
              font-size: 1.1rem;
            }
            
            .phone-group {
              flex-direction: column;
            }
            
            .country-selector {
              flex: none;
            }
            
            .form-control {
              padding: 12px 15px;
            }
            
            .newsletter-content h3 {
              font-size: 2rem;
            }
            
            .newsletter-form {
              max-width: 100%;
            }
          }

          @media (max-width: 576px) {
            .contact-form-section {
              padding: 40px 0;
            }
            
            .contact-content,
            .contact-form-container {
              padding: 30px 20px;
            }
            
            .contact-main-title h2 {
              font-size: 1.6rem;
            }
            
            .contact-form h3 {
              font-size: 1.4rem;
            }
            
            .feature-icon {
              width: 40px;
              height: 40px;
            }
            
            .feature-icon i {
              font-size: 1rem;
            }
            
            .submit-btn {
              padding: 14px 25px;
              font-size: 1rem;
            }
          }
            
        `}</style>
    </>
  );
}
