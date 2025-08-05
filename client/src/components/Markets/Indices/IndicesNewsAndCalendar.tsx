import React from 'react';

const IndicesNewsAndCalendar = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        {/* Section Heading */}
        <h2 className="fw-bold text-center mb-5" style={{ color: '#f24521' }}>
          Major Index Moves and News
        </h2>

        <div className="row">
          <div className="col-md-7">
            <h4 className="fw-semibold mb-4">Indices News & Analysis</h4>

            {[
              {
                title: 'Wall Street Indices Outlook: Nasdaq 100, S&P 500, Dow Jones Technical Levels',
                author: 'By Matt Simpson',
                time: 'Today 3:57 AM',
                tags: ['APAC Session', 'Asian Open', 'Indices', 'Dow Jones', 'S&P 500', 'Nasdaq'],
              },
              {
                title: 'S&P 500 forecast: Stocks extend rally to new highs',
                time: 'Monday 6:12 PM',
              },
              {
                title: 'Nasdaq 100, ASX 200 Outlook: Nasdaq Hits Fresh Highs As Fed Cut Bets Grow',
                time: 'Friday 5:00 AM',
              },
              {
                title: 'S&P 500 forecast: Tech fuelled rally lifts index to the brink of record',
                time: 'Thursday 5:25 PM',
              },
              {
                title: 'FTSE 100 forecast: UK stocks struggle as Nasdaq hits new highs',
                time: 'June 25, 2025 07:40 PM',
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
              View more indices news →
            </a>
          </div>

          {/* Economic Calendar */}
          <div className="col-md-5 mt-5 mt-md-0">
            <h4 className="fw-semibold mb-4">Economic Calendar</h4>

            {[
              { date: 'Monday, Jun 30', country: 'HK', event: 'Hong Kong SAR Establishment Day', importance: 0 },
              { date: 'Tuesday, Jul 01', country: 'CA', event: 'Canada Day', importance: 0 },
              {
                date: 'Wednesday, Jul 02 - 08:00',
                country: 'IT',
                event: 'Unemployment (May)',
                actual: '6.5%',
                consensus: '6.0%',
                previous: '6.1%',
                importance: 1,
              },
              {
                date: 'Wednesday, Jul 02 - 08:00',
                country: 'BR',
                event: "Fipe's IPC Inflation (Jun)",
                actual: '-0.08%',
                previous: '0.27%',
                importance: 1,
              },
              {
                date: 'Wednesday, Jul 02 - 08:00',
                country: 'EMU',
                event: "ECB's De Guindos speech",
                importance: 2,
              },
            ].map((item, idx) => (
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
