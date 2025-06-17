import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import PageHeading from '../PageHeading';

export default function ContactPage() {
  pageTitle('Contact Us');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
    phone: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [showQueryOptions, setShowQueryOptions] = useState(false);
  const [selectedQueries, setSelectedQueries] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleQueryOption = (option) => {
    setSelectedQueries(prev => {
      if (prev.includes(option)) {
        return prev.filter(item => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  const confirmQueries = () => {
    setFormData(prev => ({
      ...prev,
      query: selectedQueries.join(', ')
    }));
    setShowQueryOptions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://reach-7m5r.onrender.com/submit_message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      console.log('Raw response:', text);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      JSON.parse(text); // Ensure it's valid JSON
      setSuccessMessage('✅ Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        query: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setSuccessMessage('❌ Something went wrong. Please try again later.');
    }
  };

  const queryOptions = [
    'Partnership', 'Support', 'Feedback', 'Account Management', 
    'Hiring', 'General', 'Technical', 
    'Billing', 'Product Demo', 'Consultation', 
    'Training', 'Integration', 'Custom Dev'
  ];

  // Updated styles
  const styles = {
    queryWrapper: {
      position: 'relative',
      '@media (max-width: 768px)': {
        width: '100%',
      }
    },
    overlay: {
      position: 'absolute',
      top: '100%',
      left: '0',
      width: '150%',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      padding: '20px',
      marginTop: '5px',
      zIndex: 10,
      transform: 'scale(0.95)',
      opacity: 0,
      visibility: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      '@media (max-width: 768px)': {
        width: '65%',
        alignItems: 'center',
        justifyContent: 'center',
        left: '50%',
        right: 'auto',
        transform: 'translateX(-50%) scale(0.95)',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) scale(0.95)',
        maxHeight: '80vh',
        overflowY: 'auto',
        margin: '0',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '80px',
      }
    },
    overlayVisible: {
      transform: 'scale(1)',
      opacity: 1,
      visibility: 'visible',
      '@media (max-width: 768px)': {
        transform: 'translate(-50%, -50%) scale(1)',
      }
    },
    optionsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '15px',
      marginBottom: '20px',
      '@media (max-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '10px',
        marginBottom: '10px',
      },
      '@media (max-width: 480px)': {
        gridTemplateColumns: '1fr',
      }
    },
    optionButton: {
      padding: '12px 16px',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      textAlign: 'center',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      color: '#fff',
      whiteSpace: 'nowrap',
      minWidth: 'fit-content',
      width: 'auto',
      transform: 'scale(1)',
      '@media (max-width: 768px)': {
        padding: '12px',
        fontSize: '14px',
      },
      '&:hover': {
        transform: 'scale(1.05)',
        background: 'rgba(255, 255, 255, 0.15)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      }
    },
    optionButtonSelected: {
      background: 'rgba(255, 0, 0, 0.3)',
      border: '1px solid rgba(255, 0, 0, 0.5)',
      color: '#fff',
      transform: 'scale(1.05)',
      boxShadow: '0 4px 12px rgba(255, 0, 0, 0.2)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      '&:hover': {
        transform: 'scale(1.08)',
        background: 'rgba(255, 0, 0, 0.4)',
      }
    },
    confirmButton: {
      width: '65%',
      padding: '12px',
      background: 'rgba(172, 25, 25, 0.8)',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      // margin: '0 auto',
      display: 'block'
    },
    confirmButtonMobile: {
      padding: '12px 20px',
      fontSize: '16px',
      borderRadius: '12px',
      background: 'rgba(146, 13, 13, 0.95)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '65%',
      // maxWidth: '250px'
    },
  };

  return (
    <>
      <div className="responsive-page-heading">
        <PageHeading
          title="Contact Us"
          bgSrc="/images/blog_hero_bg.jpeg"
          pageLinkText="Contact Us"
        />
      </div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Reach For the Stars<br /> and Us "
              subtitle=""
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form className="row" onSubmit={handleSubmit}>
              <Div className="col-sm-6">
                <label className="cs-primary_color">What's the name behind the big idea?</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Drop your email coordinates</label>
                <input
                  type="email"
                  className="cs-form_field"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>

              {/* Updated Query Field with Overlay Dropdown */}
              <Div className="col-sm-6" style={styles.queryWrapper}>
                <label className="cs-primary_color" style={{ 
                  fontSize: '16px', 
                  fontWeight: '500',
                  marginBottom: '10px',
                  display: 'block',
                  height: '24px',
                  lineHeight: '24px'
                }}>What can we help you with?</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  onFocus={() => setShowQueryOptions(true)}
                  readOnly
                  required
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }
                  }}
                />
                {showQueryOptions && (
                  <div style={{
                    ...styles.overlay,
                    ...(showQueryOptions ? styles.overlayVisible : {})
                  }}>
                    <div style={styles.optionsGrid}>
                      {queryOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          style={{
                            ...styles.optionButton,
                            ...(selectedQueries.includes(option) ? styles.optionButtonSelected : {})
                          }}
                          onClick={() => toggleQueryOption(option)}
                        >
                          {selectedQueries.includes(option) && (
                            <Icon icon="mdi:check" style={{ fontSize: '18px' }} />
                          )}
                          {option}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      style={{
                        ...styles.confirmButton,
                        '@media (max-width: 768px)': styles.confirmButtonMobile
                      }}
                      onClick={confirmQueries}
                    >
                      Confirm Selection
                    </button>
                  </div>
                )}
                <Spacing lg="20" md="20" />
              </Div>

              <Div className="col-sm-6">
                <label className="cs-primary_color" style={{ 
                  fontSize: '16px', 
                  fontWeight: '500',
                  marginBottom: '10px',
                  display: 'block',
                  height: '24px',
                  lineHeight: '24px'
                }}>Let's connect, where should we ring?</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Light up our day, with your words</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
              {successMessage && (
                <Div className="col-sm-12" style={{ marginTop: '15px' }}>
                  <p
                    style={{
                      color: successMessage.startsWith('✅') ? 'green' : 'red',
                      fontWeight: '500',
                    }}
                  >
                    {successMessage}
                  </p>
                </Div>
              )}
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2137773995424!2d78.45179807504813!3d17.44156148337416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb979f084554ff%3A0x4b9df894038780b3!2sSerene%20Heights%2C%20Masab%20Tank%2C%20Hyderabad%2C%20Telangana%20500028!5e0!3m2!1sen!2sin!4v1716910451650!5m2!1sen!2sin"
          allowFullScreen
          title="Google Map"
        />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
