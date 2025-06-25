import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pageTitle } from '../../../helper';

export default function OfflineExperientialMarketingPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    pageTitle('Offline Experiential Marketing | Raising 100x');
    navigate('/service/creative-marketing');
  }, [navigate]);
  
  return null;
} 