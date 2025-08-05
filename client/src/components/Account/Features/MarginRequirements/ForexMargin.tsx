'use client';

import React from 'react';

const ForexMargin: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT - TEXT */}
          <div className="col-md-6 text-start" style={{ color: '#333' }}>
            <h2 style={{ color: '#f24521', fontWeight: '700', marginBottom: '1.5rem' }}>
              What Are the Requirements for Forex Margin?
            </h2>
            <p>
              Forex margin requirements are the amount of money you need in your trading account to open and maintain a leveraged position. It is not a fee but a security deposit that enables you to control larger trades than your account balance would normally allow.
            </p>
            <p>
              NestPip calculates margin as a percentage of the total trade value. For example, if the margin requirement is 2%, you must have $2,000 in your account to control a $100,000 position.
            </p>
            <p>
              Different instruments and trading conditions have varying margin requirements, so it is important to understand these before trading.
            </p>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', color: '#333' }}>
              <li>
                <strong>Leverage Impact:</strong> Higher leverage means lower margin needed but also increases risk.
              </li>
              <li>
                <strong>Minimum Deposit:</strong> NestPip requires a minimum deposit to cover your margin and trade effectively.
              </li>
              <li>
                <strong>Position Size:</strong> Larger trade sizes require higher margin amounts.
              </li>
              <li>
                <strong>Risk Management:</strong> Maintain sufficient margin to avoid margin calls or forced liquidation.
              </li>
            </ul>
            <p>
              At NestPip, you can use flexible leverage up to 1:500, allowing you to manage your margin requirements wisely.
            </p>
          </div>

          {/* RIGHT - IMAGE */}
          <div className="col-md-6 text-center">
            <img
              src="/images/forex-margin.png" // Replace with your actual image path
              alt="Forex Margin Requirements"
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForexMargin;
