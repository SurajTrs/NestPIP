import React from 'react';

const StocksNewsAndCalendar = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        {/* Section Heading */}
        <h2 className="fw-bold text-center mb-5" style={{ color: '#f24521' }}>
          Latest Stocks News and Market Calendar
        </h2>

        <div className="row">
          {/* News Column */}
          <div className="col-md-7">
            <h4 className="fw-semibold mb-4">Stocks News & Analysis</h4>

            {[
              {
                title: 'Weekly Equities Outlook: Sainsbury, Currys and Constellation Brands',
                author: 'By Fiona Cincotta',
                time: 'Sunday 6:40 PM',
                tags: ['Equities', 'Outlook', 'Sainsbury', 'Currys', 'Constellation Brands'],
              },
              {
                title: 'S&P 500 Outlook: SPX Making a Run at ATHs as Q2 Close Nears',
                time: 'June 25, 2025 09:15 PM',
              },
              {
                title: 'Pairs trading: definition, strategy, and example',
                time: 'June 21, 2025 10:15 PM',
              },
              {
                title: 'Weekly equities forecast: BP, Berkeley Group, Whitbread',
                time: 'June 14, 2025 07:30 AM',
              },
              {
                title: 'S&P 500 Forecast: SPX 6k Defense Ahead of the FOMC',
                time: 'June 13, 2025 12:15 AM',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="mb-4 pb-3 border-bottom"
              >
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
              View more stocks news →
            </a>
          </div>

          {/* Economic Calendar */}
          <div className="col-md-5 mt-5 mt-md-0">
            <h4 className="fw-semibold mb-4">Economic Calendar</h4>

            {[
              { date: 'Monday, Jun 30', country: 'HK', event: 'Hong Kong SAR Establishment Day', importance: 0 },
              { date: 'Tuesday, Jul 01', country: 'CA', event: 'Canada Day', importance: 0 },
              {
                date: 'Wednesday, Jul 02 - 10:30',
                country: 'UK',
                event: "BoE's Taylor speech",
                importance: 2,
              },
              {
                date: 'Wednesday, Jul 02 - 11:00',
                country: 'US',
                event: 'MBA Mortgage Applications (Jun 27)',
                actual: '2.7%',
                previous: '1.1%',
                importance: 1,
              },
              {
                date: 'Wednesday, Jul 02 - 11:30',
                country: 'US',
                event: 'Challenger Job Cuts (Jun)',
                actual: '47.999K',
                previous: '93.816K',
                importance: 2,
              },
            ].map((item, idx) => (
              <div key={idx} className="mb-4 p-3 rounded shadow-sm" style={{ backgroundColor: '#fff' }}>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="text-muted small">{item.date}</span>
                  <span className="badge bg-secondary text-white">{item.country}</span>
                </div>
                <div className="fw-semibold">{item.event}</div>
                {(item.actual || item.previous) && (
                  <div className="small text-muted mt-1">
                    {item.actual && <>Actual: {item.actual} | </>}
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

export default StocksNewsAndCalendar;
