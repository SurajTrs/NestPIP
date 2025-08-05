'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TradingViewConnectBanner: React.FC = () => {
  return (
    <section
      className="py-5 text-center"
      style={{ backgroundColor: '#f24521', color: '#fff' }}
    >
      <div className="container">
        <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
          How to trade on TradingView with your FOREX.com account
        </h2>
        <p className="mb-4" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Did you know you can trade your NESTPIP.com account on TradingView through their browser, desktop, or mobile platforms? We will show you how to get started.
        </p>
        <a
          href="#connect-tradingview"
          className="btn btn-light btn-lg px-5"
          style={{
            color: '#FF7A00',
            fontWeight: 600,
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            textTransform: 'uppercase',
          }}
        >
          CONNECT TO TRADING VIEW
        </a>
      </div>
    </section>
  );
};

export default TradingViewConnectBanner;
