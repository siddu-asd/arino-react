import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ServicesMainPage from './ServicesMainPage';

export default function CategoryProductDesignPage() {
  useEffect(() => {
    pageTitle('Category Product Design | Raising 100x');
  }, []);
  return <ServicesMainPage />;
} 