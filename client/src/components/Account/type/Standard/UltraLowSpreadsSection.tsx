import React from 'react';
import Image from 'next/image';

const UltraLowSpreadsSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
                  {/* Right Image Column */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/ulta-low.png"
              alt="Ultra Low Spread Trading"
              width={500}
              height={300}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>
          {/* Left Text Column */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Ultra-Low Spreads
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              Our standard forex trading account features low spreads starting from 0.8 pips on
              major pairs like EUR/USD, GBP/USD, and USD/JPY. We work with top-tier liquidity
              providers to ensure deep market access and competitive pricing.
            </p>

            <ul className="list-unstyled mt-4" style={{ fontSize: '1rem', color: '#333' }}>
              <li className="mb-2 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                Trade the market with real-time pricing
              </li>
              <li className="mb-2 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                Execute orders without requotes
              </li>
              <li className="mb-2 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                Enjoy stable spreads even in volatile markets
              </li>
            </ul>

            <p className="mt-3" style={{ fontSize: '1rem', color: '#333' }}>
              Whether you are looking for a low spread forex account or a dependable trading
              experience, NestPip is your destination.
            </p>
          </div>

    
        </div>
      </div>
    </section>
  );
};

export default UltraLowSpreadsSection;
