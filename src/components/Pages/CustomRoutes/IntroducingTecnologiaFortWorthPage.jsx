import React, { useEffect } from 'react';
import { pageTitle } from '../../../helper';
import ServicesMainPage from './ServicesMainPage';

export default function IntroducingTecnologiaFortWorthPage() {
  useEffect(() => {
    pageTitle('Introducing Tecnologia Fort Worth | Raising 100x');
  }, []);
  return <ServicesMainPage />;
} 