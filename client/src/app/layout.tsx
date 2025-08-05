'use client';

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/style.css';
import MainNavbar from '../pages/MainNavbar';
import Footer from '../pages/Footer';
import TopNavBar from '@/pages/TopNavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Load Bootstrap JS only on client
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <body>
       
        <MainNavbar />
        <main style={{ paddingTop: '40px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
