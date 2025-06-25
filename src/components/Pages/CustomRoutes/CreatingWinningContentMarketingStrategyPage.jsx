import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import BlogMainPage from './BlogMainPage';

export default function CreatingWinningContentMarketingStrategyPage() {
  useEffect(() => {
    pageTitle('Creating a Winning Content Marketing Strategy | Raising 100x');
  }, []);
  return <BlogMainPage />;
} 