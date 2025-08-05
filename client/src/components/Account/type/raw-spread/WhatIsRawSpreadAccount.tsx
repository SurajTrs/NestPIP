import React from 'react';

const WhatIsRawSpreadAccount: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Side Image */}

          {/* Right Side Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              What is an Account with a Raw Spread?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#000' }}>
              The Nestpip Raw Spread Account is ideal if you care about trading costs, execution speed, and data transparency.
            </p>
            <ul style={{ color: '#000', fontSize: '1.1rem' }}>
              <li>Professional forex account holders who want to save money</li>
              <li>Traders who need a reliable execution model with funds</li>
              <li>Traders who work for institutions and handle large amounts of money</li>
            </ul>
          </div>
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/raw-spread-account.png"
              alt="Raw Spread Account"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', width: '100%', objectFit: 'contain' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsRawSpreadAccount;
