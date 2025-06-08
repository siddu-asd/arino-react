import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

const positionOptions = {
    Development: [

        'Full Stack Developer',
        'Mobile App Developer',
        'Web Developer',
        'Software Engineer',
        'DevOps Engineer',
        'QA Engineer',
        'Site Reliability Engineer (SRE)',
        'Technical Lead',
    ],
    Design: [
        'UI/UX Designer',
        'Product Designer',
        'Graphic Designer',
        'Visual Designer',
        'Interaction Designer',
        'Design Lead',
    ],
    Data: [
        'Data Scientist',
        'Data Analyst',
        'Machine Learning Engineer',
        'AI Engineer',
        'Big Data Engineer',
        'Data Engineer',
        'Business Intelligence Analyst',
    ],
    Cloud: [
        'Cloud Engineer',
        'Cloud Solutions Architect',
        'AWS Engineer',
        'Azure Engineer',
        'Google Cloud Engineer',
    ],
    Security: [
        'Cybersecurity Analyst',
        'Security Engineer',
        'Penetration Tester',
        'SOC Analyst',
        'Cloud Security Specialist',
        'Information Security Manager',
    ],
    Testing: [
        'Manual Tester',
        'Automation Tester',
        'Test Lead',
        'Performance Tester',
        'QA Analyst',
    ],

    Infrastructure: [
        'Network Engineer',
        'System Engineer',
        'Database Administrator (DBA)',
        'Linux Administrator',
        'IT Infrastructure Manager',
    ],

    Marketing: [
        'Digital Marketing Executive',
        'SEO Specialist',
        'Content Marketing Manager',
        'Social Media Manager',
        'Marketing Strategist',
        'Email Marketing Specialist',
        'Growth Hacker',
        'Performance Marketing Manager',
        'Campaign Manager',
        'Brand Manager',
        'Creative Director',
        'Marketing Designer',
        'Visual Branding Specialist',
    ],
    Content: [
        'Content Writer',
        'Copywriter',
        'Technical Writer',
        'Content Strategist',
        'Editor',
    ],

    //   Sales: [
    //     'Sales Executive',
    //     'Business Development Executive',
    //     'Account Manager',
    //     'Inside Sales Representative',
    //     'Lead Generation Specialist',
    //   ],
    //   Analytics: [
    //     'Marketing Analyst',
    //     'CRM Analyst',
    //     'Web Analytics Specialist',
    //     'Customer Insights Analyst',
    //   ],
};

export default function CareerPage() {
    pageTitle('Careers');

    const [selectedCategory, setSelectedCategory] = useState('');
    const [positions, setPositions] = useState([]);
    const [selectedPosition, setSelectedPosition] = useState('');

    useEffect(() => {
        setPositions(positionOptions[selectedCategory] || []);
        setSelectedPosition('');
    }, [selectedCategory]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PageHeading
                title="Join Our Team"
                bgSrc="/images/contact_hero_bg.jpeg"
                pageLinkText="Careers"
            />
            <Spacing lg="150" md="80" />
            <Div className="container">
                <Div className="row">
                    <Div className="col-lg-8 offset-lg-2">
                        <SectionHeading
                            title="Build Your Future With Us<br />Apply Now"
                            subtitle="We’re always looking for passionate talent to join us"
                        />
                        <Spacing lg="55" md="30" />
                        <form action="#" className="row cs-career-form" encType="multipart/form-data">
                            <Div className="col-sm-6">
                                <label className="cs-primary_color">
                                    Select Category <span className="required-star">*</span>
                                </label>
                                <select
                                    className="cs-form_field"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    required
                                >
                                    <option value="">Select Category</option>
                                    {Object.keys(positionOptions).map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                                <Spacing lg="20" md="20" />
                            </Div>
                            <Div className="col-sm-6">
                                <label className="cs-primary_color">
                                    Position You're Applying For <span className="required-star">*</span>
                                </label>
                                <select
                                    className="cs-form_field"
                                    value={selectedPosition}
                                    onChange={(e) => setSelectedPosition(e.target.value)}
                                    required
                                    disabled={!selectedCategory}
                                >
                                    <option value="">Select Position</option>
                                    {positions.map((pos) => (
                                        <option key={pos} value={pos}>
                                            {pos}
                                        </option>
                                    ))}
                                </select>
                                <Spacing lg="20" md="20" />
                            </Div>
                            <Div className="col-sm-6">
                                <label className="cs-primary_color">
                                    Your Email <span className="required-star">*</span>
                                </label>
                                <input type="email" className="cs-form_field" required />
                                <Spacing lg="20" md="20" />
                            </Div>
                            <Div className="col-sm-6">
                                <label className="cs-primary_color">
                                    Mobile Number <span className="required-star">*</span>
                                </label>
                                <input type="tel" className="cs-form_field" required />
                                <Spacing lg="20" md="20" />
                            </Div>
                            <Div className="col-sm-12">
                                <label className="cs-primary_color">
                                    Upload Resume (PDF only) <span className="required-star">*</span>
                                </label>
                                <input
                                    type="file"
                                    className="cs-form_field"
                                    accept="application/pdf"
                                    required
                                />
                                <Spacing lg="25" md="25" />
                            </Div>
                            <Div className="col-sm-12">
                                <button type="submit" className="cs-btn cs-style1">
                                    <span>Submit Application</span>
                                    <Icon icon="bi:arrow-right" />
                                </button>
                            </Div>
                        </form>

                    </Div>
                </Div>
            </Div>
            <Spacing lg="150" md="80" />
        </>
    );
}
