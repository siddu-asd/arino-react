import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function WhatWeLikeAboutTeamworkPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/service/creative-marketing');
  }, [navigate]);
  
  return null;
} 