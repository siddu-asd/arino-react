import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pageTitle } from '../../../helper';

export default function CreativeStudioPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    pageTitle('Creative Studio | Raising 100x');
    navigate('/service/studio');
  }, [navigate]);
  
  return null;
} 