import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const WallStreetNews: React.FC = () => {
  const news = [
    {
      title: 'What is the VIX index? How to use the volatility index in your trades',
      author: 'By Rebecca Cattlin',
      time: 'Yesterday 6:59 PM',
      tags: ['SPX 500', 'Indices', 'Insights', 'Volatility'],
    },
    {
      title: 'DAX Outlook: EU Stocks Ease as Tariff Deadline Looms',
      time: 'Friday 5:52 PM',
    },
    {
      title: 'NFP was strong: what does it mean for markets?',
      time: 'Thursday 6:45 PM',
    },
    {
      title: 'Wall Street Indices Outlook: Nasdaq 100, S&P 500, Dow Jones Technical Levels',
      time: 'Wednesday 3:57 AM',
    },
    {
      title: 'S&P 500 Forecast: Stocks Extend Rally to New Highs',
      time: 'June 30, 2025 06:12 PM',
    },
  ];

  type EconomicEvent = {
    date: string;
    importance: number;
    country: string;
    event: string;
    actual?: string;
    previous?: string;
    consensus?: string;
  };

  const economicEvents: EconomicEvent[] = [
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
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#F9F9F9' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#FF7A00' }}>
          Wall Street News & Economic Calendar
        </h2>

        <div className="row">
          {/* News Section */}
          <div className="col-md-7">
            <h5 className="fw-semibold mb-4">Latest Indices News & Analysis</h5>
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
              View more indices news →
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
                    {event.actual && <span>Actual: {event.actual}</span>}
                    {event.consensus && <span> | Consensus: {event.consensus}</span>}
                    {event.previous && <span> | Previous: {event.previous}</span>}
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

export default WallStreetNews;
