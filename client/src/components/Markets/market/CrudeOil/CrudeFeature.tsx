import React from 'react';

const CrudeOilFeatures = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f24521' }}>
      <div className="container">
        <div className="row text-center justify-content-center">
          {/* Feature 1 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
              <h5 className="fw-bold mb-2" style={{ color: '#f24521' }}>
                Trade US & Brent Crude
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                ✔ Access both WTI and Brent crude oil markets for greater flexibility
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
              <h5 className="fw-bold mb-2" style={{ color: '#f24521' }}>
                Leverage & Tight Spreads
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                ✔ Trade with competitive spreads and leverage to maximize opportunities
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
              <h5 className="fw-bold mb-2" style={{ color: '#f24521' }}>
                Real-Time Market Access
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                ✔ Stay ahead with live charts, pricing, and economic news impacting oil prices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrudeOilFeatures;
