import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CounterPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/career');
  }, [navigate]);
  
  return null;
} 