import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CommodityNews = () => {
  const news = [
    {
      title: 'Gold Eyes Breakout as Range Tightens Between Key Levels',
      author: 'By David Scutt',
      time: 'Today 6:59 AM',
      tags: ['Gold', 'Commodities', 'Precious Metals'],
    },
    {
      title: 'Crude Oil Outlook: WTI Crude Faces the $65 Zone',
      time: 'Wednesday 11:34 PM',
    },
    {
      title: 'Crude oil outlook: WTI remains delicately balanced',
      time: 'Tuesday 7:31 PM',
    },
    {
      title: 'Nasdaq 100 Forecast QQQ rises after underlying inflation rises less than feared, Nvidia jumps',
      time: 'Tuesday 6:43 PM',
    },
    {
      title: 'Copper Holds Above 14-year Resistance, Silver Traces New Decade Highs',
      time: 'July 11, 2025 06:38 PM',
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#FF7A00', textDecoration: 'underline' }}>
          Commodity News & Analysis
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
            View more commodity news →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommodityNews;
