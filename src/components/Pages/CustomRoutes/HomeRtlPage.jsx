import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import Home from '../Home';

export default function HomeRtlPage() {
  useEffect(() => {
    pageTitle('Home RTL | Raising 100x');
  }, []);
  return <Home />;
} 