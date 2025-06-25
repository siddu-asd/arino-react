import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import BlogMainPage from './BlogMainPage';

export default function MarketingAutomationLeadGenPage() {
  useEffect(() => {
    pageTitle('Marketing Automation Lead Gen | Raising 100x');
  }, []);
  return <BlogMainPage />;
} 