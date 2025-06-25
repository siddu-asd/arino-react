import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import CreativeSolutionHome from '../CreativeSolutionHome';

export default function ProductWebApplicationPage() {
  useEffect(() => {
    pageTitle('Product Web Application | Raising 100x');
  }, []);
  return <CreativeSolutionHome />;
} 