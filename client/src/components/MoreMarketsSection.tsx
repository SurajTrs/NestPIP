'use client';

import React from 'react';

const moreMarkets = [
  {
    icon: '/icons/gold-bars.svg',
    title: 'Gold and Silver',
    description: 'Traditionally viewed as a safe haven, gold is a popular risk-off asset in turbulent times.',
    linkText: 'GOLD CFDS',
    linkHref: '#gold-cfds',
  },
  {
    icon: '/icons/stock-arrows.svg',
    title: 'Stock CFDs',
    description:
      'Buy and sell top companies via stock CFDs such as Netflix, Amazon, Tesla, and more with FOREX.com.',
    linkText: 'STOCK CFD TRADING',
    linkHref: '#stock-cfd-trading',
  },
  {
    icon: '/icons/indices-chart.svg',
    title: 'Indices',
    description:
      'Access the most popular global CFD indices across American, European, Asian and Australian markets.',
    linkText: 'INDICES TRADING',
    linkHref: '#indices-trading',
  },
];

const MoreMarketsSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0' }} className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-5 text-center" style={{ color: '#f24521' }}>
          More Markets to Consider
        </h2>

        <div className="row g-4">
          {moreMarkets.map(({ icon, title, description, linkText, linkHref }, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <div className="mb-3">
                  <img src={icon} alt={`${title} Icon`} height="40" />
                </div>
                <h5 className="fw-semibold mb-2">{title}</h5>
                <p className="text-muted">{description}</p>
                <a href={linkHref} className="fw-semibold" style={{ color: '#FF7A00' }}>
                  {linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreMarketsSection;
