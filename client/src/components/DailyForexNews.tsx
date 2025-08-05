import React from 'react';

const newsData = [
  {
    title: 'USD/JPY H2 2025 Forecast: Correlation Breakdown, Political Risks and Central Bank Wildcards',
    author: 'David Scutt',
    time: 'Today 8:04 AM',
    tags: ['USD JPY', 'DXY', 'Bank of Japan', 'Federal Reserve'],
  },
  {
    title: 'EUR/USD forecast: Forex Friday June 27, 2025',
    time: 'Friday 5:40 PM',
    tags: ['EUR/USD', 'Forex', 'Markets'],
  },
  {
    title: 'Dollar forecast: Dollar Index (DXY) rebounds but pressure remains as geopolitics fade',
    time: 'Wednesday 6:42 PM',
    tags: ['DXY', 'Geopolitics', 'US Dollar'],
  },
  {
    title: 'AUD/USD Outlook: RBA Rate Cut Likely as Inflation Hits 3.5-Year Low',
    time: 'Wednesday 10:20 AM',
    tags: ['AUD/USD', 'RBA', 'Inflation'],
  },
  {
    title: 'AUD/JPY Risks Breakdown as Momentum Fades Below 95.00 Resistance',
    time: 'Wednesday 4:16 AM',
    tags: ['AUD/JPY', 'Momentum', 'Technical Analysis'],
  },
];

const DailyForexNews: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-5" style={{ color: '#f24521' }}>
          Daily Forex Moves and News
        </h2>

        <div className="row g-4">
          {newsData.map((news, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <h6 className="fw-semibold mb-2">{news.title}</h6>
                {news.author && (
                  <small className="text-muted d-block mb-1">By: {news.author}</small>
                )}
                <small className="text-muted d-block mb-2">{news.time}</small>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {news.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="badge bg-light text-dark fw-normal px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-4">
          <a
            href="#"
            className="btn"
            style={{
              backgroundColor: '#FF7A00',
              color: '#fff',
              padding: '0.6rem 1.5rem',
              borderRadius: '12px',
              fontWeight: 500,
            }}
          >
            View More Forex News
          </a>
        </div>
      </div>
    </section>
  );
};

export default DailyForexNews;
