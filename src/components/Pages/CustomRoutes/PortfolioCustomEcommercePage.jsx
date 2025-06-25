import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PortfolioCustomEcommercePage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/about');
  }, [navigate]);
  
  return null;
} 