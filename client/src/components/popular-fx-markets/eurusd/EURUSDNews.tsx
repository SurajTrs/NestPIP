import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EURUSDNews = () => {
  const news = [
    {
      title: 'EUR/USD Analysis: Euro Holds Neutral Bias Amid U.S. Independence Day',
      author: 'By Julian Pineda',
      time: 'Friday 11:59 PM',
      tags: ['EUR', 'USD', 'EURO', 'FOREX', 'US NFP REPORT'],
    },
    {
      title: 'Dollar Forecast: Forex Friday July 4, 2025',
      time: 'Friday 5:01 PM',
    },
    {
      title: 'NFP was strong: what does it mean for markets?',
      time: 'Thursday 6:45 PM',
    },
    {
      title: 'NFP Preview: Could We See the First Sub-100K Jobs Report of 2025?',
      time: 'Wednesday 8:05 PM',
    },
    {
      title: 'USD/JPY Forecast: Dollar Rebounds but Risks Still Tilted to Downside',
      time: 'Wednesday 5:49 PM',
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#FF7A00' }}>
          EUR/USD News & Analysis
        </h2>

        {news.map((item, index) => (
          <div key={index} className="mb-4 pb-3 border-bottom">
            <h5 className="fw-semibold text-dark">{item.title}</h5>
            {item.author && <div className="text-muted small">{item.author}</div>}
            <div className="text-muted small mb-2">{item.time}</div>
            {item.tags && (
              <div className="d-flex flex-wrap gap-2 mb-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="badge bg-light border border-warning text-dark px-2"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="text-end">
          <a
            href="#"
            className="fw-semibold text-decoration-none"
            style={{ color: '#FF7A00' }}
          >
            View all EUR/USD news →
          </a>
        </div>
      </div>
    </section>
  );
};

export default EURUSDNews;
