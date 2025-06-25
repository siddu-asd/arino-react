import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import CareerPage from '../CareerPage';

export default function CareersMainPage() {
  useEffect(() => {
    pageTitle('Careers | Raising 100x');
  }, []);
  return <CareerPage />;
} 