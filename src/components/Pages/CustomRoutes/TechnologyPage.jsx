import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AiAutomationServicePage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/service/ai-technology');
  }, [navigate]);
  
  return null;
} 