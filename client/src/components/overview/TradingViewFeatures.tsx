'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TradingViewFeaturesWithImage: React.FC = () => {
  const features = [
    {
      icon: '/icons/fx-community.svg',
      title: 'Trader Community',
      description:
        'Get ideas and feedback on your strategies, follow your favorites, join live streams, choose from thousands of custom indicators, and more with the largest social community of traders.',
      link: {
        label: 'Learn More About PineScript',
        href: '#pinescript',
      },
    },
    {
      icon: '/icons/fx-technical-analysis.svg',
      title: 'Industry-Leading Technical Analysis',
      description:
        'Trade directly from the charts by dragging and dropping entry and exit points. Choose from over 80 built-in indicators, or use custom ones written in PineScript.',
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Features of TradingView
            </h2>
            <p className="text-muted mb-5" style={{ maxWidth: '540px' }}>
              Here is what to expect on FOREX.com when you access TradingView is premier charting software.
            </p>

            {features.map((feature, idx) => (
              <div key={idx} className="d-flex align-items-start mb-4">
                <img
                  src={feature.icon}
                  alt={`${feature.title} Icon`}
                  height={48}
                  className="me-3"
                  style={{
                    backgroundColor: '#FFEBD9',
                    borderRadius: '12px',
                    padding: '0.75rem',
                  }}
                />
                <div>
                  <h5 className="fw-semibold">{feature.title}</h5>
                  <p className="text-muted mb-2">{feature.description}</p>
                  {feature.link && (
                    <a
                      href={feature.link.href}
                      className="text-decoration-none"
                      style={{ color: '#FF7A00', fontWeight: 500 }}
                    >
                      {feature.link.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center">
            <img
              src="/assets/tradingview-features-illustration.png"
              alt="TradingView Features Illustration"
              className="img-fluid"
              style={{ borderRadius: '20px', maxWidth: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingViewFeaturesWithImage;
