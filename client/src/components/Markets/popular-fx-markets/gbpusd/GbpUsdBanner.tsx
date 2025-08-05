'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const marketNavItems = [
  { icon: '/icons/eur-usd-icon.svg', label: 'EUR-USD' },
  { icon: '/icons/gbp-usd-icon.svg', label: 'GBP-USD' },
  { icon: '/icons/usd-jpy-icon.svg', label: 'USD-JPY' },
  { icon: '/icons/usd-chf-icon.svg', label: 'USD-CHF' },
  { icon: '/icons/gold-icon.svg', label: 'Gold (XAU-USD)' },
];

const GbpUsdbanner: React.FC = () => {
  const pathname = usePathname();
  const currentMarket = pathname?.split('/').pop()?.replace(/-/g, '').toLowerCase();

  return (
    <section style={{ backgroundColor: '#f24521', color: '#fff', padding: '5rem 0' }}>
      <div className="container text-center">
        <div
          className="d-flex justify-content-center gap-3 overflow-auto mb-4 pb-3"
          style={{ flexWrap: 'nowrap' }}
        >
          {marketNavItems.map(({ icon, label }, idx) => {
            const normalizedLabel = label.replace(/[()\/\s]/g, '').toLowerCase();
            const isActive = normalizedLabel === currentMarket;

            return (
              <a
                key={idx}
                href={`/markets/${label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`btn d-flex flex-column align-items-center justify-content-center fw-semibold ${
                  isActive ? 'btn-light' : 'btn-outline-light'
                }`}
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '12px',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  backgroundColor: isActive
                    ? 'rgba(255,255,255,0.3)'
                    : 'rgba(255,255,255,0.1)',
                  color: isActive ? '#000' : '#fff',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = isActive
                    ? 'rgba(255,255,255,0.3)'
                    : 'rgba(255,255,255,0.1)')
                }
              >
                <img src={icon} alt={label} style={{ width: '40px', marginBottom: '0.6rem' }} />
                <span style={{ fontSize: '0.9rem' }}>{label}</span>
              </a>
            );
          })}
        </div>

        {/* GBP/USD Hero Content */}
        <div className="row align-items-center text-md-start text-center mt-5">
          <div className="col-md-6">
            <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
             You can count on Nestpip to be the best place to trade Forex for GBP/USD.
            </h1>
            <h1 className="fw-bold mb-3" style={{ fontSize: '1.5rem' }}>Welcome to the Best Forex Trading Site for GBP/USD.
            </h1>
            <p className="mb-4" style={{ fontSize: '1.2rem', maxWidth: '620px', margin: '0 auto' }}>
              Nestpip is the place to go if you want to trade forex online. Get ready to dive into the exciting world of trading GBP/USD. You'll be ready to go with lightning-fast execution, no pip spreads, and cutting-edge tools that let you take charge of the market. One of the most popular and traded currency pairs in the world is the GBP/USD. It has the best forex trading platform for trading opportunities, volatility, and liquidity.
            </p>
            <ul
              className="text-start"
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
                maxWidth: '420px',
                margin: '0 auto',
              }}
            >
              <li>Trade on major news events like BoE & Fed decisions</li>
              <li>Spreads from as low as 0.5 pips</li>
              <li>24/5 market access with real-time execution</li>
            </ul>

            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start mt-4">
              <a
                href="/open-account"
                className="btn btn-success fw-bold px-4 py-2"
                style={{ borderRadius: '12px', minWidth: '150px' }}
              >
                Open An Account
              </a>
              <a
                href="/demo-account"
                className="btn btn-outline-light fw-bold px-4 py-2"
                style={{ borderRadius: '12px', minWidth: '150px', color: '#fff' }}
              >
                Try a Demo Account
              </a>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0 text-center">
            <img
              src="/assets/gbpusd-banner.png"
              alt="Trade GBP/USD"
              className="img-fluid rounded"
              style={{ maxHeight: '360px', borderRadius: '16px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GbpUsdbanner;
