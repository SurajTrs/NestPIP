'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const MultiColorChartIcon = ({ height = 32, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={height}
    viewBox="0 0 64 64"
    className={`me-3 mt-1 ${className}`}
  >
    <rect x="0" y="0" width="64" height="64" fill="white" />
    <polyline
      points="8,56 20,40 32,44 44,20 56,24"
      fill="none"
      stroke="#0077c8"
      strokeWidth="4"
    />
    <circle cx="8" cy="56" r="3" fill="#91c337" />
    <circle cx="20" cy="40" r="3" fill="#fdb913" />
    <circle cx="32" cy="44" r="3" fill="#ff5a5f" />
    <circle cx="44" cy="20" r="3" fill="#00c4cc" />
    <circle cx="56" cy="24" r="3" fill="#0077c8" />
  </svg>
);

const MobileIcon = ({ height = 32, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={height}
    viewBox="0 0 64 64"
    className={`me-3 mt-1 ${className}`}
  >
    <rect x="18" y="4" width="28" height="56" rx="4" fill="#0077c8" />
    <rect x="22" y="8" width="20" height="44" rx="2" fill="#ffffff" />
    <circle cx="32" cy="56" r="2" fill="#555555" />
  </svg>
);

const MonitorIcon = ({ height = 32, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={height}
    viewBox="0 0 64 64"
    className={`me-3 mt-1 ${className}`}
  >
    <rect x="4" y="8" width="56" height="36" rx="4" fill="#0077c8" />
    <rect x="8" y="12" width="48" height="28" rx="2" fill="#ffffff" />
    <rect x="28" y="48" width="8" height="4" fill="#555" />
    <rect x="20" y="52" width="24" height="4" fill="#999" rx="2" />
  </svg>
);

const TradePlatforms: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start flex-md-row-reverse">
          {/* Left Image */}
          <div className="col-md-6 mb-5 mb-md-0 text-center">
            <img
              src="/assets/FXUS-Laptop-and-Phones-Platform.png"
              alt="Trading Platforms"
              className="img-fluid"
              style={{ maxWidth: 'auto', borderRadius: '20px' }}
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '2.2rem' }}>
              Trade Without Compromise
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
              Our app and platforms give you every possible edge—so you can focus on what matters most: performance and precision.
            </p>

            {/* Platform Features */}
            <div className="mb-4 d-flex">
              <MobileIcon height={32} className="me-3 mt-1" />

              <div>
                <h6 className="fw-semibold mb-1">Mobile App</h6>
                <p className="text-muted mb-0">
                  Intuitive and packed with tools—trade on the go with one-swipe trading, TradingView charts, and our exclusive Performance Analytics.
                </p>
              </div>
            </div>

            <div className="mb-4 d-flex">
              <MonitorIcon height={32} className="me-3 mt-1" />

              <div>
                <h6 className="fw-semibold mb-1">Web Trading</h6>
                <p className="text-muted mb-0">
                  Trade with over 80 indicators, Reuters news, behavioral science tools, and TradingView charts—all in your browser.
                </p>
              </div>
            </div>

            <div className="mb-4 d-flex">
              <MultiColorChartIcon height={32} className="me-3 mt-1" />
              <div>
                <h6 className="fw-semibold mb-1">MT5 Enhanced</h6>
                <p className="text-muted mb-0">
                  The classic MetaTrader 5, now with Reuters news integration and all the tools serious traders demand.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#platforms"
              className="btn btn-lg mt-3"
              style={{
                backgroundColor: '#f24521',
                borderColor: '#FF7A00',
                color: '#fff',
                borderRadius: '12px',
                padding: '0.75rem 2rem',
                fontWeight: 500,
              }}
            >
              Choose Your Trading Platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradePlatforms;
