import React from 'react';

const MobileTradingFeatures = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Mobile App Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/assets/mobile-trading-app.png" 
              alt="Mobile Trading App"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '85%' }}
            />
          </div>

          {/* Right: Text Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3" style={{ color: '#FF7A00' }}>
              Award-winning Mobile Apps
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '1rem' }}>
              Designed for instant control wherever you are, enjoy one-tap trading, intelligent market tools and a customizable layout to suit your trading style.
            </p>

            {/* Features List */}
            <div className="mb-4">
              <h5 className="fw-semibold" style={{ color: '#FF7A00' }}>TradingView Charts</h5>
              <p className="text-muted mb-2">80+ indicators, 11 chart types and 14 timeframes.</p>
              <a href="#" style={{ color: '#006400', fontWeight: 500 }}>Learn more about our advanced charts →</a>
            </div>

            <div className="mb-4">
              <h5 className="fw-semibold" style={{ color: '#FF7A00' }}>Trading Research</h5>
              <p className="text-muted mb-2">Access integrated market analysis, Reuters news & a full economic calendar.</p>
              <a href="#" style={{ color: '#006400', fontWeight: 500 }}>Discover more about Trading Research →</a>
            </div>

            <div className="mb-4">
              <h5 className="fw-semibold" style={{ color: '#FF7A00' }}>Performance Analytics</h5>
              <p className="text-muted mb-2">Analyze your decision making with the latest behavioral science technology.</p>
              <a href="#" style={{ color: '#006400', fontWeight: 500 }}>Find out more about Performance Analytics →</a>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a
                href="#learn-mobile-trading"
                className="btn fw-bold"
                style={{
                  backgroundColor: '#006400',
                  color: '#fff',
                  padding: '0.65rem 1.8rem',
                  borderRadius: '12px',
                }}
              >
                Learn more about mobile trading
              </a>
              <a
                href="/demo-account"
                className="btn btn-outline-dark fw-bold"
                style={{
                  padding: '0.65rem 1.8rem',
                  borderRadius: '12px',
                  borderColor: '#333',
                }}
              >
                Try a Demo Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileTradingFeatures;
