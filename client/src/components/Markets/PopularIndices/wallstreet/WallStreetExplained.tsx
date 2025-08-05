import React from 'react';

const features = [
  {
    icon: '/icons/us30-icon.svg',
    alt: 'US30 Index',
    title: 'US30 Index CFD',
    description: 'Trade the performance of the Dow Jones (Wall Street) without owning any stocks.',
  },
  {
    icon: '/icons/leverage-icon.svg',
    alt: 'Leverage Options',
    title: 'Flexible Leverage',
    description: 'Control large positions with smaller capital using up to 1:500 leverage.',
  },
  {
    icon: '/icons/market-tools-icon.svg',
    alt: 'Pro Tools',
    title: 'Institutional Tools',
    description: 'Analyze movements with advanced indicators, depth-of-market, and price alerts.',
  },
  {
    icon: '/icons/risk-management-icon.svg',
    alt: 'Risk Management',
    title: 'Advanced Risk Management',
    description: 'Set stop-loss, take-profit, and margin alerts with full transparency.',
  },
];

const WallStreetIndexTrading: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Side Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/wall-street-index.png"
              alt="Wall Street Index Trading"
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxHeight: '500px' }}
            />
          </div>

          {/* Right Side Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Trade the Wall Street Index (US30) with Confidence
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
              When you trade the Wall Street Index (US30), you are speculating on the movement of the Dow Jones—America’s most influential stock index. Rather than buying individual stocks, you can trade the index as a whole using CFDs and benefit from both rising and falling markets.
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
                  backgroundColor: '#f24521',
                  color: '#fff',
                  padding: '0.6rem 1.5rem',
                  fontWeight: 500,
                  borderRadius: '12px',
                }}
              >
                Start Index Trading
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
                Try a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WallStreetIndexTrading;
