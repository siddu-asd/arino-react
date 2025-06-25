import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CallToActionPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/contact');
  }, [navigate]);
  
  return null;
} 