import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ContactPage from '../ContactPage';

export default function TeamMatZalmanPage() {
  useEffect(() => {
    pageTitle('Mat Zalman | Raising 100x');
  }, []);
  return <ContactPage />;
} 