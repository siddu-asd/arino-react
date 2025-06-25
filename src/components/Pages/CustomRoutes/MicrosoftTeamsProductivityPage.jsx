import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ContactPage from '../ContactPage';

export default function MicrosoftTeamsProductivityPage() {
  useEffect(() => {
    pageTitle('Microsoft Teams The Productivity Swiss Army Knife | Raising 100x');
  }, []);
  return <ContactPage />;
} 