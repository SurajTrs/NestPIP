import React from 'react';

const benefits = [
  {
    icon: '/icons/liquidity-icon.svg',
    alt: 'High Liquidity',
    title: 'High Liquidity',
    description: 'Tight spreads and deep market volume make it ideal for active traders.',
  },
  {
    icon: '/icons/volatility-icon.svg',
    alt: 'Volatility',
    title: 'Volatility',
    description: 'Frequent price movements offer great setups for day and swing traders.',
  },
  {
    icon: '/icons/global-icon.svg',
    alt: 'Global Influence',
    title: 'Global Influence',
    description: 'Economic news from the U.S. directly impacts index price action.',
  },
  {
    icon: '/icons/hedge-icon.svg',
    alt: 'Hedging',
    title: 'Hedging Opportunities',
    description: 'Protect your equity positions by trading movements in the index.',
  },
];

const WhyTradeWallStreetIndex: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Side Content */}
          <div className="col-md-6 mb-4 mb-md-0 order-2 order-md-1">
            <h2 className="fw-bold mb-4" style={{ color: '#FF7A00' }}>
              Why Should You Trade the Wall Street Index?
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
              There are several advantages to trading the Wall Street Index (US30), which tracks the top 30 U.S. companies. Whether you are a short-term trader or hedging a portfolio, this index offers both opportunity and flexibility.
            </p>

            {/* Benefit List */}
            <div className="d-flex flex-column gap-3">
              {benefits.map(({ icon, alt, title, description }, idx) => (
                <div className="d-flex align-items-start" key={idx}>
                  <img src={icon} alt={alt} height={36} className="me-3" />
                  <div>
                    <h6 className="fw-semibold mb-1">{title}</h6>
                    <small className="text-muted">{description}</small>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-muted">
              The most important thing is to pick the right platform—like <strong>Nestpip</strong>—that gives you real-time access, a smooth interface, and powerful charting tools.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="col-md-6 order-1 order-md-2">
            <img
              src="/images/wall-street-benefits.png"
              alt="Why Trade Wall Street Index"
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTradeWallStreetIndex;
