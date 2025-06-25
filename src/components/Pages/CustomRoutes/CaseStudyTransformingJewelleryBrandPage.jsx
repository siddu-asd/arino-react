import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';

export default function CaseStudyTransformingJewelleryBrandPage() {
  useEffect(() => {
    pageTitle('Case Study: Transforming a Jewellery Brand | Raising 100x');
  }, []);
  return (
    <div style={{padding: '60px 0', textAlign: 'center'}}>
      <h1>Case Study: Transforming a Jewellery Brand</h1>
      <p>Case study content coming soon.</p>
    </div>
  );
} 