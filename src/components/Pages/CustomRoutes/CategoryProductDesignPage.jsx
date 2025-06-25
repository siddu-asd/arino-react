import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CategoryProductDesignPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/blog');
  }, [navigate]);
  
  return null;
} 