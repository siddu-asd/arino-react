import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import CreativeSolutionHome from '../CreativeSolutionHome';

export default function DesignInternshipChallengePage() {
  useEffect(() => {
    pageTitle('Design Internship Challenge | Raising 100x');
  }, []);
  return <CreativeSolutionHome />;
} 