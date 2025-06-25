import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ContactPage from '../ContactPage';

export default function CareersMainPage() {
  useEffect(() => {
    pageTitle('Careers | Raising 100x');
  }, []);
  return <ContactPage />;
} 