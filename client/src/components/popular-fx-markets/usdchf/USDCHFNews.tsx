import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const USDCHFNews: React.FC = () => {
  const news = [
    {
      title: 'USD/CHF Outlook: Dollar Holds Gains Amid Risk-Off Mood',
      author: 'By Fawad Razaqzada',
      time: 'Today 10:45 AM',
      tags: ['USDCHF', 'FOREX', 'TRADE SETUPS', 'MACRO NEWS'],
    },
    {
      title: 'Swiss Franc Under Pressure: What to Watch Ahead of NFP',
      time: 'Yesterday 3:30 PM',
    },
    {
      title: 'USD/CHF Forecast: Bulls Eye 0.80 as Momentum Builds',
      time: 'Tuesday 12:00 PM',
    },
    {
      title: 'US Dollar Strength: Cross-Pairs at Weekly Highs',
      time: 'Monday 5:45 PM',
    },
    {
      title: 'CHF in Focus: Market Cautious Ahead of ECB Decision',
      time: 'Sunday 7:00 PM',
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
    date: 'Monday, Jul 07',
    importance: 2,
    country: 'EMU',
    event: 'Eurogroup Meeting',
  },
  {
    date: 'Monday, Jul 07 – 19:30',
    importance: 1,
    country: 'US',
    event: 'CFTC Oil NC Net Positions',
    actual: '234.7K',
    previous: '233.0K',
  },
];


  return (
    <section className="py-5" style={{ backgroundColor: '#F9F9F9' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#FF7A00' }}>
          USD/CHF News & Economic Calendar
        </h2>

        <div className="row">
          {/* News Section */}
          <div className="col-md-7">
            <h5 className="fw-semibold mb-4">Latest USD/CHF News & Analysis</h5>
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
              View more USD/CHF news →
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

export default USDCHFNews;
