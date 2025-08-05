'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TradeSmartBanner: React.FC = () => {
  return (
    <section
      className="py-5 text-center"
      style={{ backgroundColor: '#f24521', color: '#fff' }}
    >
      <div className="container">
        <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
          Trade Smarter with NestPip
        </h2>
        <p
          className="mb-4"
          style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}
        >
          Join thousands of traders using NestPip’s powerful platform to make smarter, faster trading decisions.
          Enjoy low spreads, lightning-fast execution, and tools designed for success.
        </p>
        <a
          href="#start-trading"
          className="btn btn-light btn-lg px-5"
          style={{
            color: '#4b2c00',
            fontWeight: 600,
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            textTransform: 'uppercase',
          }}
        >
          START TRADING
        </a>
      </div>
    </section>
  );
};

export default TradeSmartBanner;
