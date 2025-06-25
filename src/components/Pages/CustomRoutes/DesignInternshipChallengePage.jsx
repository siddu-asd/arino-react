import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pageTitle } from '../../../helper';

export default function DesignInternshipChallengePage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    pageTitle('Design Internship Challenge | Raising 100x');
    navigate('/portfolio');
  }, [navigate]);
  
  return null;
} 