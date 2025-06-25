import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProgressbarPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/portfolio');
  }, [navigate]);
  
  return null;
} 