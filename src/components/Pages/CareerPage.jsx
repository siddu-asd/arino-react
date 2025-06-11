import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import PageHeading from '../PageHeading';

const positionOptions = {
  Development: ['Full Stack Developer', 'Mobile App Developer', 'Web Developer', 'Software Engineer', 'DevOps Engineer', 'QA Engineer', 'Site Reliability Engineer (SRE)', 'Technical Lead'],
  Design: ['UI/UX Designer', 'Product Designer', 'Graphic Designer', 'Visual Designer', 'Interaction Designer', 'Design Lead'],
  Data: ['Data Scientist', 'Data Analyst', 'Machine Learning Engineer', 'AI Engineer', 'Big Data Engineer', 'Data Engineer', 'Business Intelligence Analyst'],
  Cloud: ['Cloud Engineer', 'Cloud Solutions Architect', 'AWS Engineer', 'Azure Engineer', 'Google Cloud Engineer'],
  Security: ['Cybersecurity Analyst', 'Security Engineer', 'Penetration Tester', 'SOC Analyst', 'Cloud Security Specialist', 'Information Security Manager'],
  Testing: ['Manual Tester', 'Automation Tester', 'Test Lead', 'Performance Tester', 'QA Analyst'],
  Infrastructure: ['Network Engineer', 'System Engineer', 'Database Administrator (DBA)', 'Linux Administrator', 'IT Infrastructure Manager'],
  Marketing: ['Digital Marketing Executive', 'SEO Specialist', 'Content Marketing Manager', 'Social Media Manager', 'Marketing Strategist', 'Email Marketing Specialist', 'Growth Hacker', 'Performance Marketing Manager', 'Campaign Manager', 'Brand Manager', 'Creative Director', 'Marketing Designer', 'Visual Branding Specialist'],
  Content: ['Content Writer', 'Copywriter', 'Technical Writer', 'Content Strategist', 'Editor'],
};

export default function CareerPage() {
  pageTitle('Careers');

  const [selectedCategory, setSelectedCategory] = useState('');
  const [positions, setPositions] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setPositions(positionOptions[selectedCategory] || []);
    setSelectedPosition('');
  }, [selectedCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume || resume.type !== 'application/pdf') {
      setMessage('Please upload a valid PDF resume.');
      return;
    }

    const formData = new FormData();
    formData.append('category', selectedCategory);
    formData.append('position', selectedPosition);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('resume', resume);

    try {
      setLoading(true);
      setMessage('');

      const response = await fetch('https://career-formsheet.onrender.com/submit_application', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Application submitted successfully!');
        setSelectedCategory('');
        setSelectedPosition('');
        setEmail('');
        setPhone('');
        setResume(null);
        document.getElementById('resumeInput').value = '';
      } else {
        setMessage(result?.error || 'Submission failed.');
      }
    } catch (err) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row flex-wrap flex-md-nowrap d-flex gap-5">
          {/* Left: Description + Radio */}
          <Div className="col-lg-4" style={{ paddingRight: '20px' ,margin: '0 auto', maxWidth: '400px', padding:'10px' }}>
            <Div className="p-6" style={{ color: 'white' }}>
              <h4 className="cs-primary_color mb-3" style={{ fontSize: '45px' }}>Rows we are Looking ?</h4>
              <p style={{ fontSize: '16px' }}>
                At 100x, we’re building with purpose and passion. Join a culture where ideas thrive and your impact is real.
              </p>
              <Spacing lg="20" md="20" />
             <div style={{ fontSize: '16px' }}>
            < label >
             <span style={{ fontWeight: 'bold' ,PaddingBottom: '10px' }}>
             <input type="radio" name="reason" value="innovation" /> Marketing</span>
             <p style={{ marginLeft: '25px', marginTop: '4px' }}>
             Promote brands and reach the right audience creatively.
             </p>
            </label><br />

             <label>
             <span style={{ fontWeight: 'bold' ,PaddingBottom: '10px' }}>
            <input type="radio" name="reason" value="growth" /> Development</span>
             <p style={{ marginLeft: '25px', marginTop: '4px' }}>
             Build and maintain websites or applications.
             </p>
             </label><br />

             <label>
             <span style={{ fontWeight: 'bold' ,PaddingBottom: '10px' }}>
             <input type="radio" name="reason" value="team" /> Design</span>
             <p style={{ marginLeft: '25px', marginTop: '4px' }}>
              Create clean, user-friendly visual designs.
              </p>
            </label><br />

            <label>
            <span style={{ fontWeight: 'bold' ,PaddingBottom: '10px' }}>
            <input type="radio" name="reason" value="flexibility" /> Content</span>
             <p style={{ marginLeft: '25px', marginTop: '4px' }}>
             Write engaging and meaningful text or media.
             </p>
         </label>
        </div>

            </Div>
          </Div>

    {/* RIGHT: Application Form */}
    <Div className="col-lg-6">
      <Div
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          color: 'white',
        }}
      >
        <SectionHeading
          title="Apply Now"
          subtitle="Take your career to the next level with us"
        />
        <Spacing lg="40" md="30" />

        <form onSubmit={handleSubmit} className="row cs-career-form" encType="multipart/form-data">
          {/* Fields (same as your current implementation) */}
          {/* Category */}
          <Div className="col-md-6 mb-4">
            <label className="cs-primary_color">Skill Category *</label>
            <select className="cs-form_field" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required>
              <option value="">Choose...</option>
              {Object.keys(positionOptions).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </Div>

          {/* Position */}
          <Div className="col-md-6 mb-4">
            <label className="cs-primary_color">Role You’re Applying For *</label>
            <select className="cs-form_field" value={selectedPosition} onChange={(e) => setSelectedPosition(e.target.value)} required disabled={!selectedCategory}>
              <option value="">Select Position</option>
              {positions.map((pos) => (
                <option key={pos} value={pos}>{pos}</option>
              ))}
            </select>
          </Div>

          {/* Email */}
          <Div className="col-md-6 mb-4">
            <label className="cs-primary_color">Email Address *</label>
            <input
              type="email"
              className="cs-form_field"
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Div>

          {/* Phone */}
          <Div className="col-md-6 mb-4">
            <label className="cs-primary_color">Phone Number *</label>
            <input
              type="tel"
              className="cs-form_field"
              placeholder="10-digit mobile"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              maxLength={10}
              pattern="\d{10}"
              required
            />
          </Div>

          {/* Resume Upload */}
          <Div className="col-12 mb-4">
            <label className="cs-primary_color">Upload Resume (PDF only) *</label>
            <input
              type="file"
              className="cs-form_field"
              id="resumeInput"
              accept="application/pdf"
              onChange={(e) => setResume(e.target.files[0])}
              required
            />
          </Div>

          {/* Submit */}
          <Div className="col-12">
            <button type="submit" className="cs-btn cs-style1" disabled={loading}>
              <span>{loading ? 'Submitting...' : 'Submit Application'}</span>
              <Icon icon="bi:arrow-right" />
            </button>
            {message && (
              <p style={{ marginTop: '15px', color: message.includes('success') ? 'limegreen' : 'tomato' }}>
                {message}
              </p>
            )}
          </Div>
        </form>
      </Div>
    </Div>
  </Div>
</Div>
<Spacing lg="100" md="60" />
</>

  );
}
