'use client';

import React from 'react';

const StandardTradingAccount: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT SIDE - TEXT */}
          <div className="col-md-6 order-md-1 order-2" style={{ color: '#333' }}>
            <h2 style={{ color: '#f24521', fontWeight: '700', marginBottom: '1.5rem' }}>
              What is a Standard Trading Account?
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              A Standard Trading Account is a flexible and easy-to-use way to trade that lets traders access the global forex market with competitive spreads, no commissions, and easy-to-use platforms like MT4 and MT5.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              The Standard Account is different from professional or raw accounts in that it has a small spread markup and no commission fees. This makes it a great choice for traders who want something simple, cheap, and with full support.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Our Standard Trading Account at Nestpip is made to help you focus on what matters most: your strategy, your growth, and your profits.
            </p>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="col-md-6 order-md-2 order-1 text-center">
            <img
              src="/images/standard-account.png" // Replace with your actual image path
              alt="Standard Trading Account Illustration"
              style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardTradingAccount;
