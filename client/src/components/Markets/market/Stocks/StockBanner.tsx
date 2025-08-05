'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const marketNavItems = [
  { icon: '/icons/bar-chart-line-blue-transparent.svg', label: 'Overview' },
  { icon: '/icons/white-dollar-pound.svg', label: 'Forex' },
  { icon: '/icons/white-square-chart-arrow.svg', label: 'Indices' },
  { icon: '/icons/bitcoin-blue.svg', label: 'Cryptocurrency' },
  { icon: '/icons/white-oil-barrel.svg', label: 'Commodities' },
  { icon: '/icons/white-oil-barrel.svg', label: 'Crude Oil' },
  { icon: '/icons/white-up-down-arrows.svg', label: 'Stocks' },
  { icon: '/icons/gold-bars-blue.svg', label: 'Gold and Silver' },
];

const MarketCategories: React.FC = () => {
  const pathname = usePathname();
  const currentMarket = pathname?.split('/').pop()?.replace(/-/g, ' ').toLowerCase();

  const heroData = {
    title: 'Trade Stocks with Confidence',
    description:
      'Diversify your portfolio with CFD trading on major global stocks. Enjoy flexible leverage, low spreads, and real-time data.',
    imgSrc: '/assets/stocks-banner.png', // Ensure this image exists
    imgAlt: 'Stocks trading banner',
  };

  return (
    <section className="market-categories-page-section">
      <section style={{ backgroundColor: '#f24521', color: '#fff', padding: '5rem 0' }}>
        <div className="container text-center">
          <div
            className="mb-4"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'nowrap',
              overflowX: 'auto',
              paddingBottom: '1.5rem',
            }}
          >
            {marketNavItems.map(({ icon, label }, idx) => {
              const isActive = label.toLowerCase() === currentMarket;

              return (
                <a
                  key={idx}
                  href={`/markets/${label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`btn ${isActive ? 'btn-light' : 'btn-outline-light'} fw-semibold`}
                  style={{
                    backgroundColor: isActive ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    width: '110px',
                    height: '110px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = isActive
                      ? 'rgba(255,255,255,0.4)'
                      : 'rgba(255,255,255,0.15)')
                  }
                >
                  <img src={icon} alt={label} style={{ width: '40px', marginBottom: '0.7rem' }} />
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{label}</span>
                </a>
              );
            })}
          </div>

          <div className="row align-items-center text-start mt-5">
            <div className="col-md-6">
              <h2 style={{ fontWeight: 700, fontSize: '2.5rem', marginBottom: '1rem' }}>
                {heroData.title}
              </h2>
              <p style={{ fontSize: '1.2rem', maxWidth: '620px', margin: '0 auto 2.5rem auto' }}>
                {heroData.description}
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4 mb-4">
                <a
                  href="/open-account"
                  className="btn fw-bold"
                  style={{
                    backgroundColor: '#006400',
                    color: '#fff',
                    padding: '0.65rem 1.8rem',
                    borderRadius: '12px',
                  }}
                >
                  Open An Account
                </a>
                <a
                  href="#demo"
                  className="btn btn-outline-light fw-bold"
                  style={{
                    padding: '0.65rem 1.8rem',
                    borderRadius: '12px',
                    borderColor: '#fff',
                    color: '#000',
                  }}
                >
                  Try a Demo Account
                </a>
              </div>
            </div>

            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src={heroData.imgSrc}
                alt={heroData.imgAlt}
                className="img-fluid rounded"
                style={{ maxHeight: '360px', borderRadius: '16px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MarketCategories;
