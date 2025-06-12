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
        setMessage('You will hear from us soon!');
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
    <div className="responsive-page-heading">
      <PageHeading
        title=" Get On Board"
        bgSrc="/images/blog_hero_bg.jpeg"
        pageLinkText="Get On Board"
      />
    </div>
  <Spacing lg="100" md="60" />
<Div className="container">
  <Div className="row cs-career-row align-items-stretch">
    {/* LEFT: Job Description */}
    <Div className="col-lg-6 mb-5 mb-lg-0 cs-career-col">
      <Div
        className="cs-career-box"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          color: 'white',
          height: '100%',
        }}
      >
       
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        Raising 100x is an experimental space for creative individuals who are willing to think beyond and try new things. Our team includes individuals who have the spark in them are waiting to ignite fire in what they do.
        </p>
        <h2 style={{ fontSize: '28px', marginBottom: '5px' }}>At this moment, we are looking for</h2>
       <Div style={{ marginTop: '30px' }}>
  <h4 style={{ fontSize: '20px', marginBottom: '10px', color: 'red' }}>Video Editor</h4>
  <p style={{ margin: '0 0 5px', fontWeight: 'bold' }}>Experience:</p>
  <p style={{ marginBottom: '10px' }}>More than 2 years</p>

  <p style={{ margin: '0 0 5px', fontWeight: 'bold' }}>Skill Set:</p>
  <ul style={{ paddingLeft: '20px', marginBottom: '30px' }}>
    <li>Adobe Premiere Pro, After Effects, and other industry-standard editing tools</li>
    <li>Knowledge of basic to advanced motion graphics</li>
    <li>Understanding of video formats, codecs, and social media specs</li>
  </ul>

  <h4 style={{ fontSize: '20px', marginBottom: '10px', color: 'red' }}>Senior Graphic Designer</h4>
  <p style={{ margin: '0 0 5px', fontWeight: 'bold' }}>Experience:</p>
  <p style={{ marginBottom: '10px' }}>More than 2 years</p>

  <p style={{ margin: '0 0 5px', fontWeight: 'bold' }}>Skill Set:</p>
  <ul style={{ paddingLeft: '20px' }}>
    <li>Adobe Creative Suite (Photoshop, Illustrator, Figma)</li>
    <li>Solid understanding of design principles, visual hierarchy, typography, color theory, and layout techniques</li>
  </ul>
</Div>
      </Div>
    </Div>

    {/* RIGHT: Application Form */}
    <Div className="col-lg-6 cs-career-col">
      <Div
        className="cs-career-box"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          color: 'white',
          height: '100%',
        }}
      >
        <SectionHeading
          title="Let's embark on a journey together. 
            Are you in? "
          subtitle="Always hunting for creative individuals "
        />
        <Spacing lg="40" md="30" />

        <form onSubmit={handleSubmit} className="row cs-career-form improved-career-form" encType="multipart/form-data">
          {/* Category */}
          <Div className="col-12 mb-3">
            <label className="cs-primary_color">Your skillset falls into which category? *</label>
            <select className="cs-form_field" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required>
              <option value="">Choose...</option>
              {Object.keys(positionOptions).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </Div>

          {/* Position */}
          <Div className="col-12 mb-3">
            <label className="cs-primary_color">What role would you play? *</label>
            <select className="cs-form_field" value={selectedPosition} onChange={(e) => setSelectedPosition(e.target.value)} required disabled={!selectedCategory}>
              <option value="">Select Position</option>
              {positions.map((pos) => (
                <option key={pos} value={pos}>{pos}</option>
              ))}
            </select>
          </Div>

          {/* Email */}
          <Div className="col-12 mb-3">
            <label className="cs-primary_color">Email coordinates *</label>
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
          <Div className="col-12 mb-3">
            <label className="cs-primary_color">Where can we connect for a call? *</label>
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
          <Div className="col-12 mb-3">
            <label className="cs-primary_color">Your resume/profile (PDF only) *</label>
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
          <Div className="col-12 text-center mt-3">
            <button type="submit" className="cs-btn cs-style1" disabled={loading} style={{ minWidth: '180px' }}>
              <span>{loading ? 'Uploading...' : 'Join 100x'}</span>
              <Icon icon="bi:arrow-right" />
            </button>
            {message && (
              <p style={{ marginTop: '15px', color: message.includes('success') ? 'limegreen' : 'green' }}>
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
<style>{`
  .cs-career-row {
    display: flex;
    align-items: stretch;
  }
  .cs-career-col {
    display: flex;
    flex-direction: column;
  }
  .cs-career-box {
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .improved-career-form {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .improved-career-form .col-12 {
    padding-left: 0;
    padding-right: 0;
  }
  .improved-career-form label {
    font-weight: 500;
    margin-bottom: 6px;
    color: #fff;
  }
  .improved-career-form .cs-form_field {
    width: 100%;
    border-radius: 8px;
    padding: 10px 14px;
    border: 1px solid #e0e0e0;
    background: rgba(255,255,255,0.12);
    color: #fff;
    margin-bottom: 0;
  }
  .improved-career-form input[type="file"] {
    color: #fff;
    background: none;
    border: none;
    padding-left: 0;
  }
  .improved-career-form button.cs-btn {
    margin-top: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 8px;
  }
  @media (max-width: 991.98px) {
    .cs-career-row {
      flex-direction: column;
    }
    .cs-career-col {
      margin-bottom: 30px;
    }
    .improved-career-form {
      max-width: 100%;
    }
  }
`}</style>
</>

  );
}
