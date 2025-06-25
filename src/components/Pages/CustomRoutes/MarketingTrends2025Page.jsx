import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ServiceDetailsPage from '../../ServiceDetailsPage';

export default function MarketingTrends2025Page() {
  useEffect(() => {
    pageTitle('Marketing Trends 2025 The Trends Youre Not Ready For | Raising 100x');
  }, []);
  return <ServiceDetailsPage serviceDetailsId="creative-marketing" />;
} 