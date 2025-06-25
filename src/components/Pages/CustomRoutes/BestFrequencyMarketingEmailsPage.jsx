import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import BlogMainPage from './BlogMainPage';

export default function BestFrequencyMarketingEmailsPage() {
  useEffect(() => {
    pageTitle('What is the Best Frequency for Sending Marketing Emails | Raising 100x');
  }, []);
  return <BlogMainPage />;
} 