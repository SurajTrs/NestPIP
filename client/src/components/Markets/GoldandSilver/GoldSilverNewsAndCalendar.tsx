import React from 'react';

const GoldSilverNewsAndCalendar: React.FC = () => {
  const news = [
    {
      title: 'Gold Price Forecast: XAU/USD Poised for July Breakout',
      author: 'By Michael Boutros',
      time: 'Today 12:43 AM',
      tags: ['GOLD', 'XAU USD', 'TECHNICAL ANALYSIS', 'TRADE IDEAS'],
    },
    {
      title: 'Gold forecast: XAU/USD extends rebound post ADP',
      time: 'Yesterday 10:46 PM',
    },
    {
      title: 'Gold forecast H2 2025: Don\'t expect repeat of first half',
      time: 'Tuesday 4:52 PM',
    },
    {
      title: 'DXY, EUR/USD, GBP/USD, USD/CAD, Gold, SPX500 Weekly Technical Outlook',
      time: 'Monday 8:57 PM',
    },
    {
      title: 'Gold forecast: XAU/USD weighed down by reduced haven demand',
      time: 'Friday 4:23 PM',
    },
  ];

  const calendar = [
    {
      date: 'Thursday, Jul 03 - 04:15',
      country: 'AE',
      event: 'S&P Global Construction PMI (Jun)',
      actual: '54.0',
      previous: '53.7',
      importance: 1,
    },
    {
      date: 'Thursday, Jul 03 - 05:00',
      country: 'IN',
      event: 'HSBC Services PMI (Jun)',
      actual: '60.4',
      consensus: '60.7',
      previous: '60.7',
      importance: 2,
    },
    {
      date: 'Thursday, Jul 03 - 05:00',
      country: 'IN',
      event: 'HSBC Composite PMI (Jun)',
      actual: '61',
      previous: '61',
      importance: 2,
    },
    {
      date: 'Thursday, Jul 03 - 06:00',
      country: 'RU',
      event: 'S&P Global Services PMI (Jun)',
      actual: '49.2',
      previous: '52.2',
      importance: 1,
    },
    {
      date: 'Thursday, Jul 03 - 06:30',
      country: 'CH',
      event: 'Consumer Price Index (MoM) (Jun)',
      actual: '0.2%',
      consensus: '0.0%',
      previous: '0.1%',
      importance: 2,
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-5" style={{ color: '#FF7A00' }}>
          Get the Latest Gold & Silver Market Updates
        </h2>

        <div className="row">
          {/* News & Analysis */}
          <div className="col-md-7">
            <h4 className="fw-semibold mb-4">Gold & Silver News and Analysis</h4>
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
              style={{ color: '#FF7A00' }}
            >
              View more precious metals news →
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

export default GoldSilverNewsAndCalendar;
