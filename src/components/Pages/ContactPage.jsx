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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

      JSON.parse(text); // Ensure the response is valid JSON
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
              <Div className="col-sm-6">
                <label className="cs-primary_color">What can we help you with?</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Let's connect, where should we ring?</label>
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
  