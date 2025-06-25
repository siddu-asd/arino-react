import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ServicesMainPage from './ServicesMainPage';

export default function CaseStudyIntegratedMarketingHospitalPage() {
  useEffect(() => {
    pageTitle('Case Study Integrated Marketing for a Multi Speciality Hospital | Raising 100x');
  }, []);
  return <ServicesMainPage />;
} 