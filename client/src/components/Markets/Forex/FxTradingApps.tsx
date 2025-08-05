import React from 'react';

const features = [
  {
    icon: '/icons/chart-icon.svg',
    alt: 'TradingView Charts',
    title: 'TradingView Charts',
    description: '80+ indicators, 11 chart types and 14 timeframes',
  },
  {
    icon: '/icons/analytics-icon.svg',
    alt: 'Performance Analytics',
    title: 'Performance Analytics',
    description: 'Analyze your decision-making with the latest behavioural science technology',
  },
  {
    icon: '/icons/alerts-icon.svg',
    alt: 'Total Control',
    title: 'Total Control',
    description: 'Customize your notifications and alerts to stay on top of the markets',
  },
  {
    icon: '/icons/market-info-icon.svg',
    alt: 'Trading Research',
    title: 'Trading Research',
    description: 'Access integrated market analysis, Reuters news & a full economic calendar',
  },
];

const FxTradingApps: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Side Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/assets/trading-apps-preview.png"
              alt="FX Trading Apps"
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxHeight: '500px' }}
            />
          </div>

          {/* Right Side Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#FF7A00' }}>
              Award-winning FX trading apps
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
              Designed for instant control wherever you are, enjoy one-swipe trading, exclusive trading analysis tools, and a customizable layout to suit your trading style.
            </p>

            {/* Feature List */}
            <div className="d-flex flex-column gap-3">
              {features.map(({ icon, alt, title, description }, idx) => (
                <div className="d-flex align-items-start" key={idx}>
                  <img src={icon} alt={alt} height={36} className="me-3" />
                  <div>
                    <h6 className="fw-semibold mb-1">{title}</h6>
                    <small className="text-muted">{description}</small>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-4 d-flex flex-wrap gap-3">
              <a
                href="#"
                className="btn"
                style={{
                  backgroundColor: '#FF7A00',
                  color: '#fff',
                  padding: '0.6rem 1.5rem',
                  fontWeight: 500,
                  borderRadius: '12px',
                }}
              >
                Choose your mobile platform
              </a>
              <a
                href="#"
                className="btn btn-outline-dark"
                style={{
                  padding: '0.6rem 1.5rem',
                  fontWeight: 500,
                  borderRadius: '12px',
                }}
              >
                Try a demo account
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FxTradingApps;
