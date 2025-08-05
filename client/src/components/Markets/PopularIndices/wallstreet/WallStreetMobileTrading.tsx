import React from 'react';

const features = [
  {
    icon: '/icons/calendar-icon.svg',
    alt: 'Economic Calendar',
    title: 'All-in-One Economic Calendar',
    description: 'Stay updated with major economic events directly on your mobile.',
  },
  {
    icon: '/icons/live-price-icon.svg',
    alt: 'Live Price Feeds',
    title: 'US30 Live Price Feeds',
    description: 'Access real-time pricing for the Wall Street Index wherever you are.',
  },
  {
    icon: '/icons/alerts-icon.svg',
    alt: 'Custom Alerts',
    title: 'Custom Alerts',
    description: 'Get notifications for important price levels and market moves.',
  },
  {
    icon: '/icons/charting-icon.svg',
    alt: 'Mobile Charting Tools',
    title: 'Mobile Charting Tools',
    description: 'Interactive charts optimized for mobile devices to analyze on the go.',
  },
];

const WallStreetMobileTrading: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Side Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/mobile-trading-wallstreet.png"
              alt="Nestpip Mobile Trading on Wall Street Index"
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxHeight: '500px' }}
            />
          </div>

          {/* Right Side Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Nestpip’s Mobile Trading Excellence on the Wall Street Index
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
              You will never miss a chance in the market again. Wall Street index mobile trading is easy and reliable with Nestpip's user-friendly mobile app. Your trading experience won’t be interrupted whether you’re on your way to work, on vacation, or just away from your desk.
            </p>

            {/* Features List */}
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

            {/* Optional buttons can be added here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WallStreetMobileTrading;
