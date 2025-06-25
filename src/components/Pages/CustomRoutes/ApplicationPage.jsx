import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ApplicationPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/contact');
  }, [navigate]);
  
  return null;
} 