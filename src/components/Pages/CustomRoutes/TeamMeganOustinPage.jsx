import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ContactPage from '../ContactPage';

export default function TeamMeganOustinPage() {
  useEffect(() => {
    pageTitle('Megan Oustin | Raising 100x');
  }, []);
  return <ContactPage />;
} 