import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import Home from '../Home';

export default function Home08Page() {
  useEffect(() => {
    pageTitle('Home 08 | Raising 100x');
  }, []);
  return <Home />;
} 