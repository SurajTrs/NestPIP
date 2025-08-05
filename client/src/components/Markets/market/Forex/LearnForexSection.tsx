'use client';

import React from 'react';

const LearnForexSection: React.FC = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: '#FF7A00',
        color: '#fff',
      }}
    >
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left Text Content */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <div>
              <h2 className="fw-bold mb-3" style={{ fontSize: '2.2rem' }}>
                Learn Forex Trading
              </h2>
              <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Increase your knowledge and gain valuable insight with our complimentary suite of in-depth educational articles detailing all aspects of forex trading.
              </p>
              <a
                href="#education"
                className="btn btn-light btn-lg"
                style={{
                  color: '#FF7A00',
                  fontWeight: 600,
                  borderRadius: '10px',
                  padding: '0.6rem 2rem',
                }}
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-12 col-md-6 text-center">
            <img
              src="/assets/learn-forex-banner.png"
              alt="Learn Forex"
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '360px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnForexSection;
