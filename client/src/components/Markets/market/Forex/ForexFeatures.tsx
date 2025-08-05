import React from 'react';

const ForexFeatures = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f24521' }}>
      <div className="container">
        <div className="row text-center">
          {/* Feature 1 */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div
              className="p-4 h-100 rounded-4 shadow-sm"
              style={{ backgroundColor: '#fff' }}
            >
              <h5 className="fw-bold mb-2" style={{ color: '#FF7A00' }}>
                0.0 EUR/USD Spreads
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                Major pairs like EUR/USD as low as 0.0 with our RAW Spread Account – low commission
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div
              className="p-4 h-100 rounded-4 shadow-sm"
              style={{ backgroundColor: '#fff' }}
            >
              <h5 className="fw-bold mb-2" style={{ color: '#FF7A00' }}>
                Ultra-Fast Execution
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                Super-fast and reliable forex trade executions across all major markets
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4">
            <div
              className="p-4 h-100 rounded-4 shadow-sm"
              style={{ backgroundColor: '#fff' }}
            >
              <h5 className="fw-bold mb-2" style={{ color: '#FF7A00' }}>
                Purpose-Built Platforms
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                Powerful, purpose-built forex currency trading platforms for every level
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForexFeatures;
