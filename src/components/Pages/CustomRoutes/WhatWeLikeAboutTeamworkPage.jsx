import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import CreativeSolutionHome from '../CreativeSolutionHome';

export default function WhatWeLikeAboutTeamworkPage() {
  useEffect(() => {
    pageTitle('What We Like About Teamwork | Raising 100x');
  }, []);
  return <CreativeSolutionHome />;
} 