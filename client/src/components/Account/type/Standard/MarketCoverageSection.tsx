import React from 'react';
import Image from 'next/image';

const MarketCoverageSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Text Column */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Market Coverage
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              The standard forex trading account gives you access to all major, minor, and exotic
              forex pairs, plus metals, oil, and global indices.
            </p>

            <ul className="list-unstyled mt-4" style={{ fontSize: '1rem', color: '#333' }}>
              <li className="mb-2 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                <strong>Forex:</strong> EUR/USD, USD/JPY, GBP/USD, and more
              </li>
              <li className="mb-2 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                <strong>Commodities:</strong> Gold, Silver, Crude Oil
              </li>
              <li className="mb-2 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                <strong>Indices:</strong> NASDAQ, S&P 500, Dow Jones, FTSE
              </li>
              <li className="mb-2 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                <strong>Exotics:</strong> USD/TRY, EUR/ZAR, USD/INR
              </li>
            </ul>

            <p className="mt-3" style={{ fontSize: '1rem', color: '#333' }}>
              Diversify your trading strategy with a single, multi-asset platform.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/market-coverage.png"
              alt="Market Coverage"
              width={500}
              height={300}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketCoverageSection;
