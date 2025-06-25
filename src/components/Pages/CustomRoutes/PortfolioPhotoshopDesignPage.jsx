import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PortfolioPhotoshopDesignPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/service/studio');
  }, [navigate]);
  
  return null;
} 