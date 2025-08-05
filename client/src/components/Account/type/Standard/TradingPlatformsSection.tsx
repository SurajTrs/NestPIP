'use client';

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const PlatformChoice: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#014421' }}>
      <div className="container">
        <div className="row align-items-center g-4 flex-column-reverse flex-md-row">
          {/* Left: Text Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3" style={{ fontSize: '1.8rem' }}>
              <span style={{ color: '#f24521' }}>PLATFORM CHOICE</span><br />
              Trade Anywhere, Anytime – <span className="text-dark">Your Way</span>
            </h2>
            <p className="mb-3">
              NestPip’s standard forex trading account is compatible with the industry’s most trusted trading platforms.
            </p>

            <ul className="list-unstyled">
              <li className="mb-3 d-flex">
                <FaCheckCircle className="me-2 text-success mt-1" />
                <div>
                  <strong style={{ color: '#f24521'}}>MetaTrader 4 (MT4)</strong><br />
                  Ideal for all types of traders. Offers technical indicators, Expert Advisors (EAs), and real-time analytics.
                </div>
              </li>
              <li className="mb-3 d-flex">
                <FaCheckCircle className="me-2 text-success mt-1" />
                <div>
                  <strong style={{ color: '#f24521' }}>MetaTrader 5 (MT5)</strong><br />
                  Next-generation platform with expanded tools, timeframes, and asset classes.
                </div>
              </li>
              <li className="mb-3 d-flex">
                <FaCheckCircle className="me-2 text-success mt-1" />
                <div>
                  <strong style={{ color: '#f24521' }}>NestPip WebTrader</strong><br />
                  Trade directly from your browser with no downloads. Streamlined for speed, simplicity, and power.
                </div>
              </li>
            </ul>

            <p className="mt-3 mb-0">
              All platforms support <strong>one-click trading</strong>, <strong>multi-chart layouts</strong>, <strong>price alerts</strong>, and <strong>advanced risk management</strong> — perfect for executing successful trading strategies.
            </p>
          </div>

          {/* Right: Optional Image or Illustration */}
          <div className="col-md-6 text-center">
            <img
              src="/images/platforms-devices.png"
              alt="Trading Platforms"
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformChoice;
