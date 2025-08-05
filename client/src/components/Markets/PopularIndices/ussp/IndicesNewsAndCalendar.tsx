import React from 'react';

const IndicesNewsAndCalendar = () => {
  const news = [
    {
      title: 'Nasdaq 100 Forecast: Can the Rally Hold Without Fresh Fuel?',
      author: 'By Fawad Razaqzada',
      time: 'Thursday 7:07 PM',
      tags: ['Nasdaq', 'US Tech 100', 'Indices'],
    },
    {
      title: 'ASX 200 Rally Stalls Below Key Resistance as Seasonal Tailwinds Fade',
      time: 'Thursday 2:29 AM',
    },
    {
      title: 'S&P 500 Forecast: Stocks in need of fresh catalyst',
      time: 'July 10, 2025 05:07 PM',
    },
    {
      title: 'FTSE 100 Forecast: European stocks rise as investors shrug off tariff threats',
      time: 'July 09, 2025 06:21 PM',
    },
    {
      title: 'What is the VIX index? How to use the volatility index in your trades',
      time: 'July 07, 2025 06:59 PM',
    },
  ];

  const calendar = [
    {
      date: 'Thursday, Jul 03 - 01:00',
      country: 'NZ',
      event: 'ANZ Commodity Price (Jun)',
      actual: '-2.3%',
      previous: '1.9%',
      importance: 1,
    },
    {
      date: 'Thursday, Jul 03 - 01:30',
      country: 'AU',
      event: 'Trade Balance (MoM) (May)',
      actual: '2,238M',
      consensus: '5,091M',
      previous: '4,859M',
      importance: 3,
    },
    {
      date: 'Thursday, Jul 03 - 01:30',
      country: 'AU',
      event: 'Exports (MoM) (May)',
      actual: '-2.7%',
      previous: '-1.7%',
      importance: 2,
    },
    {
      date: 'Thursday, Jul 03 - 01:30',
      country: 'AU',
      event: 'Imports (MoM) (May)',
      actual: '3.8%',
      previous: '1.6%',
      importance: 2,
    },
    {
      date: 'Thursday, Jul 03 - 01:45',
      country: 'CN',
      event: 'Caixin Services PMI (Jun)',
      actual: '50.6',
      consensus: '51.0',
      previous: '51.1',
      importance: 3,
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-5" style={{ color: '#f24521' }}>
          Major Indices News and Calendar Events
        </h2>

        <div className="row">
          {/* News & Analysis */}
          <div className="col-md-7">
            <h4 className="fw-semibold mb-4">Indices News & Analysis</h4>
            {news.map((item, idx) => (
              <div key={idx} className="mb-4 pb-3 border-bottom">
                <h6 className="fw-semibold mb-1">{item.title}</h6>
                {item.author && <small className="text-muted">{item.author}</small>}
                <div className="text-muted small mb-1">{item.time}</div>
                {item.tags && (
                  <div className="d-flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="badge bg-light text-dark px-2 py-1"
                        style={{ fontSize: '0.75rem' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#"
              className="text-decoration-none fw-semibold"
              style={{ color: '#f24521' }}
            >
              View more indices news →
            </a>
          </div>

          {/* Economic Calendar */}
          <div className="col-md-5 mt-5 mt-md-0">
            <h4 className="fw-semibold mb-4">Economic Calendar</h4>
            {calendar.map((item, idx) => (
              <div key={idx} className="mb-4 p-3 rounded shadow-sm" style={{ backgroundColor: '#fff' }}>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="text-muted small">{item.date}</span>
                  <span className="badge bg-secondary text-white">{item.country}</span>
                </div>
                <div className="fw-semibold">{item.event}</div>
                {(item.actual || item.previous || item.consensus) && (
                  <div className="small text-muted mt-1">
                    {item.actual && <>Actual: {item.actual} | </>}
                    {item.consensus && <>Consensus: {item.consensus} | </>}
                    {item.previous && <>Previous: {item.previous}</>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndicesNewsAndCalendar;
