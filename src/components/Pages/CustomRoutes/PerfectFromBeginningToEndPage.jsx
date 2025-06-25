import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import Home from '../Home';

export default function PerfectFromBeginningToEndPage() {
  useEffect(() => {
    pageTitle('Perfect from Beginning to End Faster and More Efficiently | Raising 100x');
  }, []);
  return <Home />;
} 