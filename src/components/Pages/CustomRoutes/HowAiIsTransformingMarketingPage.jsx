import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import BlogMainPage from './BlogMainPage';

export default function HowAiIsTransformingMarketingPage() {
  useEffect(() => {
    pageTitle('How AI is Transforming Marketing | Raising 100x');
  }, []);
  return <BlogMainPage />;
} 