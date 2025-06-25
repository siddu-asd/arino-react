import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ServicesMainPage from './ServicesMainPage';

export default function CreativeStudioPage() {
  useEffect(() => {
    pageTitle('Creative Studio | Raising 100x');
  }, []);
  return <ServicesMainPage />;
} 