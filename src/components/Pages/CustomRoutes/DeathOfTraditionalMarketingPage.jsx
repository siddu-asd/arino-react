import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import BlogMainPage from './BlogMainPage';

export default function DeathOfTraditionalMarketingPage() {
  useEffect(() => {
    pageTitle('Death of Traditional Marketing | Raising 100x');
  }, []);
  return <BlogMainPage />;
} 