import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import PortfolioHoversMotionsPage from './PortfolioHoversMotionsPage';

export default function PortfolioPhotoshopDesignPage() {
  useEffect(() => {
    pageTitle('Portfolio Photoshop Design | Raising 100x');
  }, []);
  return <PortfolioHoversMotionsPage />;
} 