import React from 'react';

const CryptoNewsAndCalendar = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-5" style={{ color: '#f24521' }}>
          Major Crypto Moves and Market News
        </h2>

        <div className="row">
          {/* Crypto News */}
          <div className="col-md-7">
            <h4 className="fw-semibold mb-4">Cryptocurrency News & Analysis</h4>

            {[
              {
                title: 'Bitcoin Update: Is the Bullish Bias Losing Steam?',
                author: 'By Julian Pineda',
                time: 'Friday 12:27 AM',
                tags: ['BITCOIN USD', 'BTCUSD', 'CRYPTOCURRENCIES'],
              },
              {
                title: 'Bitcoin, Ethereum Forecast: BTC/USD Quietly Getting a Foothold at Record Highs?',
                time: 'Wednesday 8:01 PM',
              },
              {
                title: 'Bitcoin Outlook: BTC Reaches $111,000',
                time: 'May 23, 2025 03:36 AM',
              },
              {
                title: 'BTC/USD Breakout: Bitcoin Bulls Eye Close Above Prior High',
                time: 'May 22, 2025 11:22 AM',
              },
              {
                title: 'Gold, Bitcoin Forecast: Fiat Alternatives Rally on Trump Budget Drama',
                time: 'May 21, 2025 07:41 PM',
              },
            ].map((item, idx) => (
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
              View more crypto news →
            </a>
          </div>

          {/* Economic Calendar */}
          <div className="col-md-5 mt-5 mt-md-0">
            <h4 className="fw-semibold mb-4">Economic Calendar</h4>

            {[
              { date: 'Tuesday, Jul 01', country: 'CA', event: 'Canada Day' },
              {
                date: 'Wednesday, Jul 02 - 12:00',
                country: 'BR',
                event: 'Industrial Output (YoY) (May)',
                actual: '3.3%',
                consensus: '3.5%',
                previous: '-0.3%',
              },
              {
                date: 'Wednesday, Jul 02 - 12:15',
                country: 'US',
                event: 'ADP Employment Change (Jun)',
                actual: '-33K',
                consensus: '95K',
                previous: '29K',
              },
              {
                date: 'Wednesday, Jul 02 - 13:00',
                country: 'PL',
                event: 'NBP Base Rate',
                actual: '5.25%',
                consensus: '5.25%',
                previous: '5.25%',
              },
              {
                date: 'Wednesday, Jul 02 - 13:00',
                country: 'SG',
                event: 'Manufacturing PMI (Jun)',
                actual: '50.0',
                previous: '49.7',
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

        {/* Bonus Tools Section */}
      
        {/* CTA */}
        <div className="text-center mt-5">
          <a
            href="/demo-account"
            className="btn"
            style={{
              backgroundColor: '#006400',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '12px',
              fontWeight: 600,
            }}
          >
            Try Demo Account
          </a>
        </div>
      </div>
    </section>
  );
};

export default CryptoNewsAndCalendar;
