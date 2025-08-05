import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GBPUSDNews = () => {
  const news = [
    {
      title: 'How to Trade Low Volatility: Strategies for Quiet Markets',
      author: 'By Rebecca Cattlin',
      time: 'Today 6:59 PM',
      tags: ['VOLATILITY', 'STOCKS', 'FOREX', 'EVERGREEN', 'INSIGHTS'],
    },
    {
      title: 'GBP/USD Forecast: Currency Pair of the Week – July 7, 2025',
      time: 'Today 6:56 PM',
    },
    {
      title: 'Volatility Trading Guide: Its Causes and the Most Volatile Markets',
      time: 'Today 6:55 PM',
    },
    {
      title: 'EUR/USD Analysis: Euro Holds Neutral Bias Amid U.S. Independence Day',
      time: 'Friday 11:59 PM',
    },
    {
      title: 'Dollar Forecast: Forex Friday July 4, 2025',
      time: 'Friday 5:01 PM',
    },
  ];

  const economicEvents = [
    {
      date: 'Saturday, Jul 05',
      importance: 0,
      country: 'CZ',
      event: 'Jan Hus Day',
    },
    {
      date: 'Sunday, Jul 06',
      importance: 2,
      country: 'CN',
      event: 'BRICS Summit',
    },
    {
      date: 'Sunday, Jul 06',
      importance: 0,
      country: 'MY',
      event: 'George Town Heritage Day',
    },
    {
      date: 'Monday, Jul 07',
      importance: 2,
      country: 'EMU',
      event: 'Eurogroup Meeting',
    },
    {
      date: 'Monday, Jul 07 – 09:00',
      importance: 1,
      country: 'SG',
      event: 'Foreign Reserves (MoM) (Jun)',
      actual: '405.0B',
      previous: '401.7B',
    },
    {
      date: 'Monday, Jul 07 – 09:00',
      importance: 3,
      country: 'EMU',
      event: 'Retail Sales (YoY) (May)',
      actual: '1.8%',
      consensus: '1.2%',
      previous: '2.7%',
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#FF7A00' }}>
          GBP/USD News & Economic Calendar
        </h2>

        <div className="row">
          {/* News Section */}
          <div className="col-md-7">
            <h5 className="fw-semibold mb-4">Latest Forex News & Insights</h5>
            {news.map((item, index) => (
              <div key={index} className="mb-4 pb-3 border-bottom">
                <h6 className="fw-semibold text-dark">{item.title}</h6>
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
            <a href="#" className="fw-semibold text-decoration-none" style={{ color: '#FF7A00' }}>
              View more GBP/USD news →
            </a>
          </div>

          {/* Economic Calendar Section */}
          <div className="col-md-5 mt-5 mt-md-0">
            <h5 className="fw-semibold mb-4">Economic Calendar</h5>
            {economicEvents.map((event, index) => (
              <div
                key={index}
                className="mb-3 p-3 rounded shadow-sm bg-white border-start border-4 border-warning"
              >
                <div className="d-flex justify-content-between mb-1">
                  <span className="small text-muted">{event.date}</span>
                  <span className="badge bg-secondary">{event.country}</span>
                </div>
                <div className="fw-semibold">{event.event}</div>
                {(event.actual || event.previous || event.consensus) && (
                  <div className="text-muted small mt-1">
                    {event.actual && <>Actual: {event.actual} | </>}
                    {event.consensus && <>Consensus: {event.consensus} | </>}
                    {event.previous && <>Previous: {event.previous}</>}
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

export default GBPUSDNews;
