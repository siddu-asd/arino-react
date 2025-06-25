import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import BlogPage from '../BlogPage';

export default function BlogMainPage() {
  useEffect(() => {
    pageTitle('Blog | Raising 100x');
  }, []);
  return <BlogPage />;
} 