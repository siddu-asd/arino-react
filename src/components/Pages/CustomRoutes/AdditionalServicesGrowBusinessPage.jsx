import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import BlogMainPage from './BlogMainPage';

export default function AdditionalServicesGrowBusinessPage() {
  useEffect(() => {
    pageTitle('Additional Services That Will Grow Your Business For You | Raising 100x');
  }, []);
  return <BlogMainPage />;
} 