import React from 'react';
import Image from 'next/image';

const Mt5TradingAccount: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT – TEXT */}
          <div className="col-lg-6 order-lg-1">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Do you want a trading platform that is powerful, flexible, and professional?
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              NestPip has the MetaTrader 5 (MT5) trading account for both new and experienced traders who want speed, accuracy, and access to multiple assets. We are a top-rated MetaTrader forex broker because we offer the latest platform features, low spreads, and expert support. This helps you reach your financial goals.
            </p>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              NestPip&apos;s MT5 account gives you access to global markets with a performance-driven edge, whether you&apos;re interested in forex trading, commodities, stocks, or indices.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="col-lg-6 order-lg-2 text-center">
            <Image
              src="/images/mt5-trading-platform.png" // Replace with your actual image path
              alt="MetaTrader 5 Trading Account"
              width={500}
              height={350}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mt5TradingAccount;
