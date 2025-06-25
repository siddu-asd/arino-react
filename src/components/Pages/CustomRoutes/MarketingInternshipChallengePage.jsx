import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import BlogMainPage from './BlogMainPage';

export default function MarketingInternshipChallengePage() {
  useEffect(() => {
    pageTitle('Marketing Internship Challenge | Raising 100x');
  }, []);
  return <BlogMainPage />;
} 