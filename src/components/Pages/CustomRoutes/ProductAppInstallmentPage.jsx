import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductAppInstallmentPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/');
  }, [navigate]);
  
  return null;
} 