import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import CareerPage from '../CareerPage';

export default function Hr100xPage() {
  useEffect(() => {
    pageTitle('HR 100x | Raising 100x');
  }, []);
  return <CareerPage />;
} 