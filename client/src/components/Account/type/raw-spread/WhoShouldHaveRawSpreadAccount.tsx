import React from 'react';

const WhoShouldHaveRawSpreadAccount: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
             {/* Right Side Image */}
          <div className="col-md-6">
            <img
              src="/images/raw-spread-traders.png"
              alt="Who should have a raw spread account"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', width: '100%', objectFit: 'contain' }}
            />
          </div>
          {/* Left Side Content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Who Should Have a Raw Spread Account?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#000' }}>
              The raw spread account we offer is great for:
            </p>
            <ul style={{ color: '#000', fontSize: '1.1rem' }}>
              <li>Scalpers who need exact prices</li>
              <li>Day traders looking for tight spreads for trades that happen often</li>
            </ul>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default WhoShouldHaveRawSpreadAccount;
