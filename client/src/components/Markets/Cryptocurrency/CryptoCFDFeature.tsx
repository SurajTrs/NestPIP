import React from 'react';

const CryptoFeatures = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row text-center justify-content-center">
          {/* Feature 1 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
              <h5 className="fw-bold mb-2" style={{ color: '#FF7A00' }}>
                Go Long or Short
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                ✔ Go long or short on a wide range of crypto CFDs
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
              <h5 className="fw-bold mb-2" style={{ color: '#FF7A00' }}>
                Trade on Margin
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                ✔ Open positions with low deposit requirements
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
              <h5 className="fw-bold mb-2" style={{ color: '#FF7A00' }}>
                Risk Management Tools
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                ✔ Access a wealth of tools to manage your trading risk
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoFeatures;
