import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import PortfolioHoversMotionsPage from './PortfolioHoversMotionsPage';

export default function PortfolioConsumerProductsPage() {
  useEffect(() => {
    pageTitle('Portfolio Consumer Products | Raising 100x');
  }, []);
  return <PortfolioHoversMotionsPage />;
} 