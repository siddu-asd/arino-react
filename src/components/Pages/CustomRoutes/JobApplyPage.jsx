import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ContactPage from '../ContactPage';

export default function JobApplyPage() {
  useEffect(() => {
    pageTitle('Job Apply | Raising 100x');
  }, []);
  return <ContactPage />;
} 