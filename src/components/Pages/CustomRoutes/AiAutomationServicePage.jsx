import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ServicesMainPage from './ServicesMainPage';

export default function AiAutomationServicePage() {
  useEffect(() => {
    pageTitle('AI Automation Service | Raising 100x');
  }, []);
  return <ServicesMainPage />;
} 