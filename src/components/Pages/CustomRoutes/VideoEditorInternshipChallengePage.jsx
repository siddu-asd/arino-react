import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import Home from '../Home';

export default function VideoEditorInternshipChallengePage() {
  useEffect(() => {
    pageTitle('Video Editor Internship Challenge | Raising 100x');
  }, []);
  return <Home />;
} 