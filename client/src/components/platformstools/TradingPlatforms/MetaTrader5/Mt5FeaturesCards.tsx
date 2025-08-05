import React from 'react';

const Mt5FeaturesCards: React.FC = () => {
  const features = [
    {
      title: 'Made for Trading Multiple Assets',
      description:
        'You can trade forex, stocks, indices, commodities, cryptocurrencies, and more all from one account.',
    },
    {
      title: 'Tools for Analysis That Are Next Level',
      description:
        'You can get 21 timeframes, more than 80 built-in indicators, market depth (Level II), and charting tools that you can change.',
    },
    {
      title: 'Advanced Order Execution',
      description:
        'With one-click trading and market execution, you can quickly access six types of pending orders and execute them.',
    },
    {
      title: 'Automated Trading (Expert Advisors)',
      description:
        "Use Expert Advisors (EAs) to deploy algorithmic strategies or MT5's strategy tester to test your own bots.",
    },
    {
      title: 'Mobile and Web Flexibility',
      description:
        'You can use MT5 on Windows, macOS, Android, iOS, or right in your browser with MT5 WebTrader.',
    },
  ];

  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 1rem' }}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {features.map((feature, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 4px 15px rgba(242,69,33,0.15)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h4
                  style={{
                    color: '#f24521',
                    fontWeight: '700',
                    marginBottom: '1rem',
                  }}
                >
                  {feature.title}
                </h4>
                <p style={{ color: '#333', flexGrow: 1, fontSize: '1rem' }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mt5FeaturesCards;
