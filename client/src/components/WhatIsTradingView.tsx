'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const WhatIsTradingView: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left Image */}
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img
              src="/assets/tradingview-illustration.png" // replace with your actual image path
              alt="TradingView Illustration"
              className="img-fluid"
              style={{ borderRadius: '20px', maxWidth: '100%', height: 'auto' }}
            />
          </div>

          {/* Right Text Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              What is NestPIP?
            </h2>
            <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
             NestPip is a next-generation trading platform that empowers users to trade forex, indices, commodities, and more with powerful tools, real-time insights, and an intuitive user experience. Built for both new and experienced traders, NestPip combines cutting-edge technology, educational resources, and market analytics to help you trade with confidence.
            </p>
            <p className="text-muted mb-4" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
At NestPip, our mission is to simplify trading — offering a secure, feature-rich environment where you can grow your skills, track your performance, and stay ahead in the global financial markets.            </p>

            <a
              href="#open-account"
              className="btn btn-lg"
              style={{
                backgroundColor: '#f24521',
                color: '#fff',
                borderRadius: '12px',
                padding: '0.75rem 2rem',
                fontWeight: 500,
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#f24521';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#f24521';
              }}
              >
              Open an Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsTradingView;
