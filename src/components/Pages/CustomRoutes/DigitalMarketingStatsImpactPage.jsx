import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import BlogMainPage from './BlogMainPage';

export default function DigitalMarketingStatsImpactPage() {
  useEffect(() => {
    pageTitle('10 Digital Marketing Stats That Will Impact Your Business | Raising 100x');
  }, []);
  return <BlogMainPage />;
} 