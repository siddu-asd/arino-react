import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import Home from '../Home';

export default function CompanyPage() {
  useEffect(() => {
    pageTitle('Company | Raising 100x');
  }, []);
  return <Home />;
} 