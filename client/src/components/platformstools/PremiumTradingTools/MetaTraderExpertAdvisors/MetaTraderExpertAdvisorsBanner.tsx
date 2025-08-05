'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const marketNavItems = [
  { icon: '/icons/ActiveTrader-icon.svg', label: 'Active Trader' },
  { icon: '/icons/APITrading-icon.svg', label: 'API Trading' },
  { icon: '/icons/ExpertAdvisor-icon.svg', label: 'MetaTrader Expert Advisors' },
  { icon: '/icons/VPSHosting-icon.svg', label: 'MetaTrader VPS Hosting' },
];

const MetaTraderExpertAdvisorsBanner: React.FC = () => {
  const pathname = usePathname();
  const currentMarket = pathname?.split('/').pop()?.replace(/-/g, '').toLowerCase();

  return (
    <>
    <section style={{ backgroundColor: '#f24521', color: '#fff', padding: '5rem 0' }}>
      <div className="container text-center">
        {/* Nav Icons */}
        <div
          className="d-flex justify-content-center gap-3 overflow-auto mb-4 pb-3"
          style={{ flexWrap: 'nowrap' }}
        >
          {marketNavItems.map(({ icon, label }, idx) => {
            const normalizedLabel = label.replace(/[()\/\s\.]/g, '').toLowerCase();
            const isActive = normalizedLabel === currentMarket;

            return (
              <a
                key={idx}
                href={`/platforms-tools/${label.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                className={`btn d-flex flex-column align-items-center justify-content-center fw-semibold ${
                  isActive ? 'btn-light' : 'btn-outline-light'
                }`}
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '12px',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  transition: 'background-color 0.3s ease',
                  backgroundColor: isActive
                    ? 'rgba(255,255,255,0.3)'
                    : 'rgba(255,255,255,0.1)',
                  cursor: 'pointer',
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

        {/* Expert Advisors Content */}
        <div className="row align-items-center text-md-start text-center mt-5">
          <div className="col-md-6">
            <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
              Automate Your Trading with MetaTrader Expert Advisors
            </h1>
            <p className="mb-4" style={{ fontSize: '1.2rem', maxWidth: '620px', margin: '0 auto' }}>
              Use powerful algorithmic trading robots to execute strategies 24/7 without manual intervention.
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
              <li>Customizable and fully automated trading robots</li>
              <li>Backtest strategies with historical data</li>
              <li>Enhance precision and reduce emotional trading</li>
            </ul>

            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start mt-4">
              <a
                href="/tools/meta-trader-expert-advisors"
                className="btn btn-primary fw-bold px-4 py-2"
                style={{ borderRadius: '12px', minWidth: '220px' }}
              >
                Explore Expert Advisors
              </a>
              <a
                href="/tools"
                className="btn btn-outline-light fw-bold px-4 py-2"
                style={{ borderRadius: '12px', minWidth: '150px', color: '#fff' }}
              >
                View All Tools
              </a>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0 text-center">
            <img
              src="/assets/meta-trader-expert-advisors-banner.png"
              alt="MetaTrader Expert Advisors"
              className="img-fluid rounded"
              style={{ maxHeight: '360px', borderRadius: '16px' }}
            />
          </div>
        </div>
      </div>
    </section>
    <section style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 0' }}>
  <div className="container text-center">
    <h1 style={{ color: '#f24521' }}>What is an Expert Advisor (EA)?</h1>
    <p className="fs-5 mt-3" style={{ color: '#fff3e9' }}>
      An Expert Advisor (EA) is a program that runs on MetaTrader, allowing traders to automate strategies or enhance platform functionality.
    </p>
  </div>
</section>
<section style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 0' }}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h2 style={{ color: '#f24521' }}>Automated Trading & Beyond</h2>
        <p>
          While commonly used for automation, EAs can also display additional chart info, run strategies, or enhance trade signals. You can run multiple EAs simultaneously.
        </p>
        <p className="text-warning">⚠️ EAs run locally and would not execute if MetaTrader is closed or your PC is off.</p>
      </div>
      <div className="col-md-6">
        <img src="/images/ea-platform.png" alt="Expert Advisor Interface" className="img-fluid rounded" />
      </div>
    </div>
  </div>
</section>
<section style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 0' }}>
  <div className="container text-center">
    <h2 style={{ color: '#f24521' }}>What Can an Expert Advisor Do?</h2>
    <p className="fs-5" style={{ color: '#fff3e9' }}>
      EAs can generate signals, automate trades, display data, or create advanced widgets on your MetaTrader platform. Remove emotion from trading while saving time.
    </p>
  </div>
</section>
<section style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 0' }}>
  <div className="container">
    <h2 className="text-center mb-5" style={{ color: '#f24521' }}>Key Benefits of MetaTrader EAs</h2>
    <div className="row text-center">
      {[
        'Automate trades/orders',
        'Display market data graphically',
        'Streamline complex order execution',
        'Provide trading signals',
        'Offer advanced indicators',
        'Change the platform look'
      ].map((benefit, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <div className="p-3 border rounded text-white" style={{ borderColor: '#f24521' }}>
            <span style={{ color: '#f24521' }}>✔</span> {benefit}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 0' }}>
  <div className="container">
    <h2 className="text-center" style={{ color: '#f24521' }}>Explore Popular Expert Advisors</h2>
    <div className="row mt-4">
      {[
        { name: "Alarm Manager", desc: "Set alerts for market or account events.", video: "#", image: "/ea/alarm.png" },
        { name: "Correlation Matrix", desc: "Visualize correlation between markets.", video: "#", image: "/ea/matrix.png" },
        { name: "Mini Terminal", desc: "Streamlined deal ticket and market control.", video: "#", image: "/ea/mini.png" }
      ].map((ea, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <div className="card bg-dark text-white h-100">
            <img src={ea.image} className="card-img-top" alt={ea.name} />
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#f24521' }}>{ea.name}</h5>
              <p className="card-text">{ea.desc}</p>
              <a href={ea.video} className="btn btn-outline-light btn-sm">Watch Video</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 0' }}>
  <div className="container text-center">
    <h2 style={{ color: '#f24521' }}>Download EAs + Indicators</h2>
    <p className="fs-5" style={{ color: '#fff3e9' }}>
      Get 9 powerful Expert Advisors and 15 advanced indicators to elevate your MetaTrader experience.
    </p>
    <a href="/downloads/ea-pack.zip" className="btn btn-lg btn-danger mt-3">Download EA Pack</a>
  </div>
</section>
<section style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 0' }}>
  <div className="container">
    <h2 style={{ color: '#f24521' }}>Where Can I Find EAs?</h2>
    
    <div className="alert alert-warning mt-4" role="alert">
      ⚠️ FOREX.com is not responsible for any third-party EA software. Use at your own risk.
    </div>
  </div>
</section>
</>
  );
};

export default MetaTraderExpertAdvisorsBanner;
