import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const XAUUSDNews = () => {
  const news = [
    {
      title: 'Gold Prices Steady as Market Awaits Fed Comments',
      author: 'By John Smith',
      time: 'Today 8:45 AM',
      tags: ['GOLD', 'XAUUSD', 'FED', 'INFLATION', 'COMMODITIES'],
    },
    {
      title: 'XAU/USD Forecast: Key Resistance Ahead of Fed Minutes',
      time: 'Today 7:30 AM',
    },
    {
      title: 'Why Gold Remains a Safe-Haven Amid Market Volatility',
      time: 'Yesterday 9:10 PM',
    },
    {
      title: 'Gold Price Technical Analysis: Triangle Breakout Forming',
      time: 'Friday 10:00 PM',
    },
    {
      title: 'US Dollar Impact on Gold: What Traders Should Know',
      time: 'Friday 3:30 PM',
    },
  ];

  const economicEvents = [
    {
      date: 'Sunday, Jul 06',
      importance: 2,
      country: 'CN',
      event: 'BRICS Summit',
    },
    {
      date: 'Monday, Jul 07',
      importance: 3,
      country: 'US',
      event: 'Fed Chair Powell Speech',
    },
    {
      date: 'Monday, Jul 07 - 08:30',
      importance: 3,
      country: 'US',
      event: 'Nonfarm Payrolls (Jun)',
      actual: '275K',
      consensus: '240K',
      previous: '223K',
    },
    {
      date: 'Monday, Jul 07 - 10:00',
      importance: 2,
      country: 'US',
      event: 'ISM Services PMI (Jun)',
      actual: '54.3',
      consensus: '53.0',
      previous: '55.1',
    },
    {
      date: 'Tuesday, Jul 08',
      importance: 1,
      country: 'IN',
      event: 'Gold Import Data (MoM)',
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#FFFDF5' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#f24521' }}>
          XAU/USD News & Economic Calendar
        </h2>

        <div className="row">
          {/* News Section */}
          <div className="col-md-7">
            <h5 className="fw-semibold mb-4">Latest Gold Market News & Insights</h5>
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
            <a href="#" className="fw-semibold text-decoration-none" style={{ color: '#f24521' }}>
              View more XAU/USD news →
            </a>
          </div>

          {/* Economic Calendar Section */}
          <div className="col-md-5 mt-5 mt-md-0">
            <h5 className="fw-semibold mb-4">Economic Calendar</h5>
            {economicEvents.map((event, index) => (
              <div
                key={index}
                className="mb-3 p-3 rounded shadow-sm bg-white border-start border-4 border-success"
              >
                <div className="d-flex justify-content-between mb-1">
                  <span className="small text-muted">{event.date}</span>
                  <span className="badge bg-secondary">{event.country}</span>
                </div>
                <div className="fw-semibold">{event.event}</div>
                {(event.actual || event.previous || event.consensus) && (
                  <div className="text-muted small mt-1">
                    {event.actual && <span>Actual: {event.actual} </span>}
                    {event.consensus && <span>| Consensus: {event.consensus} </span>}
                    {event.previous && <span>| Previous: {event.previous}</span>}
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

export default XAUUSDNews;
