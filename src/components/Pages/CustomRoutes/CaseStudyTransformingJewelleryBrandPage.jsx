import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CaseStudyTransformingJewelleryBrandPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/service/branding');
  }, [navigate]);
  
  return null;
} 