'use client';

import React from 'react';

const features = [
  {
    icon: '/icons/lightning.svg',
    title: 'Reliable, consistent trade execution',
    description:
      'Peace of mind that your trades are executed swiftly, with a 100%* execution rate of less than a second.',
    linkText: 'EXECUTION SCORECARDS',
    linkHref: '#execution',
  },
  {
    icon: '/icons/platforms.svg',
    title: 'Award-winning trading platforms',
    description:
      'Enjoy a suite of powerful platforms and get access to Performance Analytics, exclusively at FOREX.com.',
    linkText: 'TRADING PLATFORMS',
    linkHref: '#platforms',
  },
  {
    icon: '/icons/global.svg',
    title: 'Global market leader',
    description:
      'We have over 20 years of experience in providing innovative products and helping traders around the world achieve their goals.',
    linkText: 'WHY FOREX.COM?',
    linkHref: '#why-forex',
  },
];

const WhyForexSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0' }} className="py-5">
      <div className="container">
        {/* Intro Header */}
        <div className="row align-items-center mb-5">
          <div className="col-md-8">
            <h2 className="fw-bold" style={{ color: '#f24521' }}>Why NestPip.com?</h2>
            <p className="text-muted lead mb-4">
              A lot has happened in our 20+ years serving clients globally. But throughout all that time we’ve remained
              steadfast, providing traders with the stability and opportunities they need to make their mark on the financial
              markets.
            </p>
            <a
              href="#open-account"
              className="btn btn-lg"
              style={{
                backgroundColor: '#f24521',
                color: '#fff',
                borderRadius: '10px',
                fontWeight: 600,
                padding: '0.6rem 1.8rem',
              }}
            >
              Open an Account
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="row g-4">
          {features.map(({ icon, title, description, linkText, linkHref }, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="mb-3">
                  <img src={icon} alt={`${title} Icon`} height="40" />
                </div>
                <h5 className="fw-semibold mb-2">{title}</h5>
                <p className="text-muted">{description}</p>
                <a href={linkHref} style={{ color: '#FF7A00', fontWeight: 500 }}>
                  {linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* StoneX Info */}
        <div className="row mt-5">
          <div className="col">
            <div className="bg-light p-4 rounded-4 shadow-sm">
              <h6 className="fw-bold mb-2">Part of StoneX Group Inc.</h6>
              <p className="text-muted mb-2">
                As a wholly owned subsidiary of a NASDAQ-traded company, we possess the solid foundations and financial
                strength to innovate and push the industry forward.
              </p>
              <a href="#security" style={{ color: '#f24521', fontWeight: 500 }}>STRENGTH AND SECURITY</a>
            </div>
            <small className="text-muted d-block mt-3" style={{ fontSize: '0.85rem' }}>
              *Refers to trade executions for GAIN Global Markets Inc. Factors such as market conditions, platform type,
              and strategy can affect execution speed.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyForexSection;
