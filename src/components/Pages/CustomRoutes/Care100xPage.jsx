import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Care100xPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/contact');
  }, [navigate]);
  
  return null;
} 