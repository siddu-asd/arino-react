import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import BlogMainPage from './BlogMainPage';

export default function AdvanceTabPage() {
  useEffect(() => {
    pageTitle('Advance Tab | Raising 100x');
  }, []);
  return <BlogMainPage />;
} 