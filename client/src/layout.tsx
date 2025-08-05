// app/layout.tsx
import React from 'react';
import { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'; // your global styles
import MainNavbar from './pages/MainNavbar';
import Footer from './pages/Footer';
import TopNavBar from './pages/TopNavBar';

export const metadata: Metadata = {
  title: 'NestPip | Forex Trading',
  description: 'Trade smarter with NestPip – low spreads, top platforms, and global markets at your fingertips.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <TopNavBar/>
        <MainNavbar />
        <div style={{ paddingTop: '90px' }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
