import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ServicesPage from '../ServicesPage'

export default function OfflineExperientialMarketingPage() {
  useEffect(() => {
    pageTitle('Offline Experiential Marketing | Raising 100x');
  }, []);
  return <ServicesPage />;
} 