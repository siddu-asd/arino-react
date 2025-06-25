import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ServicesMainPage from './ServicesMainPage';

export default function TechnologyPage() {
  useEffect(() => {
    pageTitle('Technology | Raising 100x');
  }, []);
  return <ServicesMainPage />;
} 