'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainNavbar: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'markets' | 'prices' | 'accounts' | 'account-types' | 'transparency' | 'features'>('markets');
  const [showMarketsDropdown, setShowMarketsDropdown] = useState(false);
  const [showAccountsDropdown, setShowAccountsDropdown] = useState(false);
  const [showPlatformsDropdown, setShowPlatformsDropdown] = useState(false);

  let marketsTimeout: NodeJS.Timeout;
  let accountsTimeout: NodeJS.Timeout;
  let platformsTimeout: NodeJS.Timeout;

  const handleMarketsEnter = () => {
    clearTimeout(marketsTimeout);
    setShowMarketsDropdown(true);
  };
  const handleMarketsLeave = () => {
    marketsTimeout = setTimeout(() => setShowMarketsDropdown(false), 300);
  };

  const handleAccountsEnter = () => {
    clearTimeout(accountsTimeout);
    setShowAccountsDropdown(true);
  };
  const handleAccountsLeave = () => {
    accountsTimeout = setTimeout(() => setShowAccountsDropdown(false), 300);
  };

  const handlePlatformsEnter = () => {
    clearTimeout(platformsTimeout);
    setShowPlatformsDropdown(true);
  };
  const handlePlatformsLeave = () => {
    platformsTimeout = setTimeout(() => setShowPlatformsDropdown(false), 300);
  };

  
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm border-bottom py-2 fixed-top">

      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/images/logo.png"
            alt="NestPip Logo"
            height="250"
            width="140" 
            className="me-2"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">

          
          <li
  className="nav-item dropdown position-static"
  onMouseEnter={handleMarketsEnter}
  onMouseLeave={handleMarketsLeave}
>
  <a
    className="nav-link dropdown-toggle text-dark"
    href="#"
    id="marketsDropdown"
    role="button"
    onClick={(e) => e.preventDefault()}
  >
    Markets
  </a>

  {showMarketsDropdown && (
    <div
      className="dropdown-menu mega-menu p-4 shadow border-0 show"
      aria-labelledby="marketsDropdown"
      style={{ minWidth: '700px', backgroundColor: '#FFF7F0' }}
    >
      <div className="d-flex">
        {/* Sidebar Tabs */}
        <div className="d-flex flex-column me-4" style={{ minWidth: '160px' }}>
          <button
            className={`btn mb-2 text-start ${activeTab === 'markets' ? 'active-tab' : 'inactive-tab'}`}
            onClick={() => setActiveTab('markets')}
            style={{ borderRadius: '8px' }}
          >
            Trade Markets
          </button>
          <button
            className={`btn mb-2 text-start ${activeTab === 'prices' ? 'active-tab' : 'inactive-tab'}`}
            onClick={() => setActiveTab('prices')}
            style={{ borderRadius: '8px' }}
          >
            Trade Price
          </button>
       
        </div>

        {/* Dynamic Tab Content */}
        <div className="flex-grow-1 d-flex justify-content-between flex-wrap">
          {activeTab === 'markets' && (
            <>
              <div style={{ minWidth: '150px', marginRight: '0.5rem' }}>
                <ul className="list-unstyled">
                  <li><strong>Markets</strong></li>
                  <li><Link href="/markets/forex" className="dropdown-item">Forex</Link></li>
                  <li><Link href="/markets/indices" className="dropdown-item">Indices</Link></li>
                  <li><Link href="/markets/stocks" className="dropdown-item">Stocks</Link></li>
                  <li><Link href="/markets/cryptocurrency" className="dropdown-item">Cryptocurrency</Link></li>
                  <li><Link href="/markets/commodities" className="dropdown-item">Commodities</Link></li>
                  <li><Link href="/markets/crude-oil" className="dropdown-item">Crude Oil</Link></li>
                  <li><Link href="/markets/gold-and-silver" className="dropdown-item">Gold and Silver</Link></li>
                </ul>
              </div>

              <div style={{ minWidth: '150px', marginRight: '0.5rem' }}>
                <ul className="list-unstyled">
                  <li><strong>Popular FX Markets</strong></li>
                  <li><Link href="/markets/eur-usd" className="dropdown-item">EUR/USD</Link></li>
                  <li><Link href="/markets/gbp-usd" className="dropdown-item">GBP/USD</Link></li>
                  <li><Link href="/markets/usd-jpy" className="dropdown-item">USD/JPY</Link></li>
                  <li><Link href="/markets/usd-chf" className="dropdown-item">USD/CHF</Link></li>
                  <li><Link href="/markets/gold-xau-usd" className="dropdown-item">Gold (XAU/USD)</Link></li>
                </ul>
              </div>

              <div style={{ minWidth: '150px', marginRight: '0.5rem' }}>
                <ul className="list-unstyled">
                  <li><strong>Popular Indices</strong></li>
                  <li><Link href="/markets/wall-street" className="dropdown-item">Wall Street</Link></li>
                  <li><Link href="/markets/us-sp-500" className="dropdown-item">US SP 500</Link></li>
                  <li><Link href="/markets/us-tech-100" className="dropdown-item">US Tech 100</Link></li>
                  <li><Link href="/markets/germany-40" className="dropdown-item">Germany 40</Link></li>
                </ul>
              </div>

              <div style={{ minWidth: '150px', marginRight: '0.5rem' }}>
                <ul className="list-unstyled">
                  <li><strong>Popular Stocks</strong></li>
                  <li><Link href="/markets/tesla" className="dropdown-item">Tesla</Link></li>
                  <li><Link href="/markets/amazon" className="dropdown-item">Amazon</Link></li>
                  <li><Link href="/markets/apple" className="dropdown-item">Apple</Link></li>
                  <li><Link href="/markets/nvidia" className="dropdown-item">Nvidia</Link></li>
                </ul>
              </div>

              <div style={{ minWidth: '150px' }}>
                <ul className="list-unstyled">
                  <li><strong>Popular Commodities</strong></li>
                  <li><Link href="/markets/crude-oil" className="dropdown-item">US Crude Oil</Link></li>
                  <li><Link href="/markets/crude-oil" className="dropdown-item">UK Crude Oil</Link></li>
                </ul>
              </div>
            </>
          )}

          {activeTab === 'prices' && (
              <>
    <div style={{ minWidth: '150px', marginRight: '0.5rem' }}>
      <ul className="list-unstyled">
        <li><strong>Pricing & Costs</strong></li>
        <li><Link href="/features/trade-prices" className="dropdown-item">Pricing</Link></li>
        <li><Link href="/features/margin-requirements" className="dropdown-item">Margin Requirements</Link></li>
        <li><Link href="/features/rollover-rates" className="dropdown-item">Rollover Rates</Link></li>
        <li><Link href="/features/margin-leverage" className="dropdown-item">Margin & Leverage</Link></li>
        <li><Link href="/features/execution" className="dropdown-item">Trading Execution</Link></li>
        <li><Link href="/features/trading-costs" className="dropdown-item">Costs & Charges</Link></li>
      </ul>
    </div>
  </>
          )}

         
        </div>
      </div>
    </div>
  )}
</li>

     



<li
  className="nav-item dropdown position-static"
  onMouseEnter={handleAccountsEnter}
  onMouseLeave={handleAccountsLeave}
>
  <a
    className="nav-link dropdown-toggle text-dark"
    href="#"
    id="accountsDropdown"
    role="button"
    onClick={(e) => e.preventDefault()}
  >
    Account
  </a>

  {showAccountsDropdown && (
    <div
      className="dropdown-menu mega-menu p-4 shadow border-0 show"
      aria-labelledby="accountsDropdown"
      style={{ minWidth: '700px', backgroundColor: '#FFF7F0' }}
    >
      <div className="d-flex">
        <div className="d-flex flex-column me-4" style={{ minWidth: '160px' }}>
          <button
            className={`btn mb-2 text-start ${activeTab === 'account-types' ? 'active-tab' : 'inactive-tab'}`}
            onClick={() => setActiveTab('account-types')}
            style={{ borderRadius: '8px' }}
          >
            Account Types
          </button>
          <button
            className={`btn mb-2 text-start ${activeTab === 'transparency' ? 'active-tab' : 'inactive-tab'}`}
            onClick={() => setActiveTab('transparency')}
            style={{ borderRadius: '8px' }}
          >
            Compare & Transparency
          </button>
          <button
            className={`btn text-start ${activeTab === 'features' ? 'active-tab' : 'inactive-tab'}`}
            onClick={() => setActiveTab('features')}
            style={{ borderRadius: '8px' }}
          >
            Platform Features
          </button>
        </div>

        <div className="flex-grow-1 d-flex justify-content-between flex-wrap">
          {activeTab === 'account-types' && (
            <>
              <div style={{ minWidth: '150px' }}>
                <ul className="list-unstyled">
                  <li><strong>Account Types</strong></li>
                  <li><Link href="/accounts/standard" className="dropdown-item">Standard Account</Link></li>
                  <li><Link href="/accounts/metatrader" className="dropdown-item">MetaTrader Account</Link></li>
                  <li><Link href="/accounts/rawspread" className="dropdown-item">RAW Spread Account</Link></li>
                  <li>
          <Link href="/accounts/metatrader4" className="dropdown-item">MT4 Account</Link>
        </li>
        <li>
          <Link href="/accounts/metatrader5" className="dropdown-item">MT5 Account</Link>
        </li>
                </ul>
              </div>

              <div className="d-flex flex-column" style={{ minWidth: '180px', gap: '0.75rem' }}>
                <Link href="/demo-account" className="btn btn-outline-primary rounded-pill w-100">
                  Free Demo Account
                </Link>
                <Link href="/live-account" className="btn btn-primary rounded-pill w-100">
                  Create Live Account
                </Link>
              </div>
            </>
          )}

          {activeTab === 'transparency' && (
            <div style={{ minWidth: '150px' }}>
              <ul className="list-unstyled">
                <li><strong>Compare & Transparency</strong></li>
                <li><Link href="/accounts/compare" className="dropdown-item">Compare Accounts</Link></li>
                <li>
                  <Link href="/accounts/financial-transparency" className="dropdown-item d-flex align-items-center">
                    <svg width="16" height="16" fill="currentColor" className="bi bi-search me-2" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.442.656a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
                    </svg>
                    Financial Transparency
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'features' && (
            <div style={{ minWidth: '150px' }}>
              <ul className="list-unstyled">
                <li><strong>Features</strong></li>
                <li><Link href="/features/execution" className="dropdown-item">Execution</Link></li>
                <li><Link href="/features/margin-requirements" className="dropdown-item">Margin Requirements</Link></li>
                <li><Link href="/features/rollover-rates" className="dropdown-item">Rollover Rates</Link></li>
                <li><Link href="/features/trade-prices" className="dropdown-item">Trade Prices</Link></li>
                <li><Link href="/features/trading-costs" className="dropdown-item">Trading Costs</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )}
</li>




<li
      className="nav-item dropdown position-static"
      onMouseEnter={handlePlatformsEnter}
      onMouseLeave={handlePlatformsLeave}
    >
      <a
        className="nav-link dropdown-toggle text-dark"
        href="#"
        id="platformsDropdown"
        role="button"
        onClick={e => e.preventDefault()}
      >
        Platforms & Tools
      </a>

      {showPlatformsDropdown && (
        <div
          className="dropdown-menu mega-menu p-4 shadow border-0 show"
          aria-labelledby="platformsDropdown"
          style={{ minWidth: '700px', backgroundColor: '#FFF7F0' }}
        >
          <div className="d-flex">
            {/* Left Tab Buttons */}
            <div className="d-flex flex-column me-4" style={{ minWidth: '160px' }}>
              <button
                className={`btn mb-2 text-start ${activeTab === 'markets' ? 'active-tab' : 'inactive-tab'}`}
                onClick={() => setActiveTab('markets')}
                style={{ borderRadius: '8px' }}
              >
Our Trading Platforms              </button>
              <button
                className={`btn mb-2 text-start ${activeTab === 'prices' ? 'active-tab' : 'inactive-tab'}`}
                onClick={() => setActiveTab('prices')}
                style={{ borderRadius: '8px' }}
              >
Platform Comparison              </button>
              <button
                className={`btn text-start ${activeTab === 'accounts' ? 'active-tab' : 'inactive-tab'}`}
                onClick={() => setActiveTab('accounts')}
                style={{ borderRadius: '8px' }}
              >
Our Trading Tools              </button>
            </div>

            {/* Right Content based on activeTab */}
            <div className="flex-grow-1 d-flex justify-content-between flex-wrap">
              {activeTab === 'markets' && (
                <>
                  <div style={{ minWidth: '150px', marginRight: '0.5rem' }}>
                    <ul className="list-unstyled">
                      <li><strong>Trading Platforms</strong></li>
                      <li><Link href="/platforms-tools/mobile-app" className="dropdown-item">Mobile App</Link></li>
                      <li><Link href="/platforms-tools/web-trader" className="dropdown-item">Web Trader</Link></li>
                      <li><Link href="/platforms-tools/metatrader-5" className="dropdown-item">MetaTrader 5</Link></li>
                      <li><Link href="/platforms-tools/platform-comparison" className="dropdown-item">Platform Comparison</Link></li>
                      <li><Link href="/platforms-tools/tradingview" className="dropdown-item">TradingView</Link></li>
                      <li><Link href="/platforms-tools/advanced-charts" className="dropdown-item">Advanced Charts</Link></li>
                      <li><Link href="/platforms-tools/how-to-connect" className="dropdown-item">How to Connect</Link></li>
                    </ul>
                  </div>

                  <div style={{ minWidth: '150px', marginRight: '0.5rem' }}>
                    <ul className="list-unstyled">
                      <li><strong>Trading Tools</strong></li>
                      <li><Link href="/platforms-tools/currency-converter" className="dropdown-item">Currency Converter</Link></li>
                      <li><Link href="/platforms-tools/margin-pip-calculator" className="dropdown-item">Margin and Pip Calculator</Link></li>
                      <li><Link href="/platforms-tools/pivot-points" className="dropdown-item">Pivot Points</Link></li>
                      <li><Link href="/platforms-tools/ai-tools" className="dropdown-item">AI Tools</Link></li>
                      <li><Link href="/platforms-tools/capitaliseai" className="dropdown-item">Capitalise.ai</Link></li>
                      <li><Link href="/platforms-tools/performance-analytics" className="dropdown-item">Performance Analytics</Link></li>
                    </ul>
                  </div>

                  <div style={{ minWidth: '150px', marginRight: '0.5rem' }}>
                    <ul className="list-unstyled">
                      <li><strong>Premium Trading Tools</strong></li>
                      <li><Link href="/platforms-tools/active-trader" className="dropdown-item">Active Trader</Link></li>
                      <li><Link href="/platforms-tools/api-trading" className="dropdown-item">API Trading</Link></li>
                      <li><Link href="/platforms-tools/metatrader-expert-advisors" className="dropdown-item">MetaTrader Expert Advisors</Link></li>
                      <li><Link href="/platforms-tools/metatrader-vps-hosting" className="dropdown-item">MetaTrader VPS Hosting</Link></li>
                    </ul>
                  </div>

                  <div style={{ minWidth: '150px' }}>
                    <ul className="list-unstyled">
                      <li><strong>Get Started</strong></li>
                      <li><Link href="/platforms-tools/get-started" className="dropdown-item">Get Started</Link></li>
                      <li><Link href="/platforms-tools/download-centre" className="dropdown-item">Download Centre</Link></li>
                      <li><Link href="/platforms-tools/platform-tutorials" className="dropdown-item">Platform Tutorials</Link></li>
                    </ul>
                  </div>
                </>
              )}

              {activeTab === 'prices' && (
                <>
                <div style={{ minWidth: '150px' }}>
                    <ul className="list-unstyled">
                      <li><strong>Compare Platforms</strong></li>
                      <li><Link href="/platforms-tools/compare-platforms" className="dropdown-item">Compare Platforms</Link></li>
                    </ul>
                  </div>
          </>
              )}

              {activeTab === 'accounts' && (
               <>
                <div style={{ minWidth: '150px' }}>
                    <ul className="list-unstyled">
                      <li><strong>Simulated Trading</strong></li>
                      <li><Link href="/platforms-tools/simulated-trading" className="dropdown-item">Simulated Trading</Link></li>
                    </ul>
                  </div>
          </>
              )}
            </div>
          </div>
        </div>
      )}
    </li>

            
            <li className="nav-item">
              <Link href="/education" className="nav-link text-dark">Education</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-dark">About</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <Link href="/LoginPage" className="btn btn-outline-danger btn-sm fw-semibold px-3">
              LOG IN
            </Link>

            <button
              className="btn btn-success btn-sm fw-bold px-3"
              onClick={() => router.push('/start-trading')}
            >
              START TRADING
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .active-tab {
          background-color: #f24521;
          color: white;
          border: 1px solid #f24521;
        }
        .active-tab:hover {
          background-color: #f24521;
          border-color: #f24521;
          color: white;
        }
        .inactive-tab {
          background-color: transparent;
          color: #f24521;
          border: 1px solid #f24521;
        }
        .inactive-tab:hover {
          background-color: #f24521;
          color: white;
        }
      `}</style>
    </nav>
  );
};

export default MainNavbar;
