import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductWebApplicationPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/portfolio');
  }, [navigate]);
  
  return null;
} 