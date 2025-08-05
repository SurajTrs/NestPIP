'use client';


import React from 'react';
import Image from 'next/image';

const OverviewSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
             <div className="col-lg-6 text-center">
            <Image
              src="/images/standardAccount.png"
              alt="Standard Account Platform Preview"
              width={500}
              height={300}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>
          {/* Left Text Column */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Trade with Confidence on the NestPip Standard Forex Trading Account
            </h2>
            <p style={{ fontSize: '1rem' }}>
              At NestPip, we’ve designed the standard forex trading account to offer the perfect balance of accessibility, efficiency, and power. It’s an ideal choice for traders seeking low-cost trading without sacrificing platform features or execution quality.
            </p>
            <ul style={{ fontSize: '1rem', paddingLeft: '1.2rem' }}>
              <li>Commission-free trading with tight spreads</li>
              <li>Access 80+ forex pairs and global instruments</li>
              <li>Full support for MT4, MT5, and WebTrader</li>
              <li>Leverage up to 1:500 with lightning-fast execution</li>
            </ul>
            <p style={{ fontSize: '1rem' }}>
              Whether you’re trading from India, the UAE, the UK, or beyond, the standard forex trading account at NestPip offers a secure and streamlined experience.
            </p>
          </div>

          {/* Right Image Column */}
         
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
