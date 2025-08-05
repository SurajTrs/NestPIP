import React from 'react';
import { FaBars, FaDollarSign, FaChartLine } from 'react-icons/fa';

const MoreMarketsToConsider: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#333' }}>
      <div className="container">
        <h2
          className="fw-bold mb-4"
          style={{ color: '#FF7A00', fontSize: '2.5rem' }} // increased heading size
        >
          More markets to consider
        </h2>
        <div className="row g-4">
          {/* Gold and Silver */}
          <div className="col-md-4 d-flex align-items-start">
            <div
              style={{
                flex: '0 0 60px',
                marginRight: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FaBars size={40} color="#007BFF" aria-hidden="true" />
            </div>
            <div style={{ flex: '1 1 auto' }}>
              <h5
                className="fw-semibold"
                style={{ fontSize: '1.5rem' }} // bigger heading
              >
                Gold and silver
              </h5>
              <p
                className="text-muted"
                style={{ fontSize: '1.125rem' }} // bigger paragraph text
              >
                Traditionally viewed as a safe haven, gold is a popular risk-off asset in turbulent times.
              </p>
              <a
                href="/gold-cfds"
                className="fw-semibold"
                style={{ color: '#006400', fontSize: '1.125rem' }} // bigger link text
              >
                GOLD CFDS
              </a>
            </div>
          </div>

          {/* Forex */}
          <div className="col-md-4 d-flex align-items-start">
            <div
              style={{
                flex: '0 0 60px',
                marginRight: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FaDollarSign size={40} color="#007BFF" aria-hidden="true" />
            </div>
            <div style={{ flex: '1 1 auto' }}>
              <h5
                className="fw-semibold"
                style={{ fontSize: '1.5rem' }}
              >
                Forex
              </h5>
              <p
                className="text-muted"
                style={{ fontSize: '1.125rem' }}
              >
                FX is the most liquid market in the world, with trading opportunities around the clock.
              </p>
              <a
                href="/forex-trading"
                className="fw-semibold"
                style={{ color: '#006400', fontSize: '1.125rem' }}
              >
                FOREX TRADING
              </a>
            </div>
          </div>

          {/* Stock CFDs */}
          <div className="col-md-4 d-flex align-items-start">
            <div
              style={{
                flex: '0 0 60px',
                marginRight: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FaChartLine size={40} color="#007BFF" aria-hidden="true" />
            </div>
            <div style={{ flex: '1 1 auto' }}>
              <h5
                className="fw-semibold"
                style={{ fontSize: '1.5rem' }}
              >
                Stock CFDs
              </h5>
              <p
                className="text-muted"
                style={{ fontSize: '1.125rem' }}
              >
                Buy and sell top companies via stock CFDs such as Netflix, Amazon, Tesla, and more with FOREX.com.
              </p>
              <a
                href="/stock-cfd-trading"
                className="fw-semibold"
                style={{ color: '#006400', fontSize: '1.125rem' }}
              >
                STOCK CFD TRADING
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreMarketsToConsider;
