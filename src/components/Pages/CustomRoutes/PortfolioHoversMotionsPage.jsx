import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ServicesMainPage from './ServicesMainPage';

export default function PortfolioHoversMotionsPage() {
  useEffect(() => {
    pageTitle('Portfolio Hovers Motions | Raising 100x');
  }, []);
  return <ServicesMainPage />;
} 