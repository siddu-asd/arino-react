import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CustomCursor from '../CustomCursor';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout({ headerVariant }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  return (
    <>
      {/* Hide Header only on /virtualtour */}
      {location.pathname !== '/virtualtour' && <Header variant={headerVariant} />}
      <Outlet />
      <CustomCursor />
      {/* Hide Footer only on /virtualtour */}
      {location.pathname !== '/virtualtour' && <Footer />}
    </>
  );
}
