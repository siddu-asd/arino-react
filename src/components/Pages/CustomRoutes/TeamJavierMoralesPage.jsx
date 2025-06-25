import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ContactPage from '../ContactPage';

export default function TeamJavierMoralesPage() {
  useEffect(() => {
    pageTitle('Javier Morales | Raising 100x');
  }, []);
  return <ContactPage />;
} 