'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const marketNavItems = [
  { icon: '/icons/eur-usd-icon.svg', label: 'EUR-USD' },
  { icon: '/icons/gbp-usd-icon.svg', label: 'GBP-USD' },
  { icon: '/icons/usd-jpy-icon.svg', label: 'USD-JPY' },
  { icon: '/icons/usd-chf-icon.svg', label: 'USD-CHF' },
  { icon: '/icons/gold-icon.svg', label: 'Gold XAU-USD' },
];

const GoldXauUsdBanner: React.FC = () => {
  const pathname = usePathname();
  const currentMarket = pathname?.split('/').pop()?.replace(/-/g, '').toLowerCase();

  return (
    <section style={{ backgroundColor: '#f24521', color: '#fff', padding: '5rem 0' }}>
      <div className="container text-center">
        {/* Market Navigation */}
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
                href={`/markets/${label.toLowerCase().replace(/\s+/g, '-').replace(/[()]+/g, '')}`}
                className={`btn d-flex flex-column align-items-center justify-content-center fw-semibold ${
                  isActive ? 'btn-dark' : 'btn-outline-dark'
                }`}
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '12px',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  backgroundColor: isActive
                    ? 'rgba(0,0,0,0.2)'
                    : 'rgba(73, 216, 41, 0.05)',
                  color: isActive ? '#000' : '#333',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = isActive
                    ? 'rgba(0, 0, 0, 0.2)'
                    : 'rgba(0,0,0,0.05)')
                }
              >
                <img src={icon} alt={label} style={{ width: '40px', marginBottom: '0.6rem' }} />
                <span style={{ fontSize: '0.9rem' }}>{label}</span>
              </a>
            );
          })}
        </div>

        {/* Hero Section */}
        <div className="row align-items-center text-md-start text-center mt-5">
          <div className="col-md-6">
            <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
Trade Gold (XAU/USD) on the Best XAU/USD Trading Platform: Nestpip 
</h1>
            <p className="mb-4" style={{ fontSize: '1.2rem', maxWidth: '620px', margin: '0 auto' }}>
Welcome to Nestpip, the best place for modern traders to trade gold. You are in the right place if you want to trade gold (XAU/USD) with tight spreads, quick execution, and full transparency. Nestpip is for both new and experienced traders who want a safe, quick, and profitable way to trade XAU/USD. 
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
              <li>Strong inflation hedge asset</li>
              <li>High market participation globally</li>
              <li>Volatile and trend-driven instrument</li>
            </ul>

            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start mt-4">
              <a
                href="/open-account"
                className="btn btn-dark fw-bold px-4 py-2"
                style={{ borderRadius: '12px', minWidth: '150px' }}
              >
                Open An Account
              </a>
              <a
                href="/demo-account"
                className="btn btn-outline-dark fw-bold px-4 py-2"
                style={{ borderRadius: '12px', minWidth: '150px' }}
              >
                Try a Demo Account
              </a>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0 text-center">
            <img
              src="/assets/gold-banner.png"
              alt="Trade Gold XAU/USD"
              className="img-fluid rounded"
              style={{ maxHeight: '360px', borderRadius: '16px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldXauUsdBanner;
