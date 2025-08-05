import React from 'react';
import { FaBolt, FaChartBar, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const WhyTradeIndices: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#333' }}>
      <div className="container">
        <div className="row align-items-start">
          {/* Left Text Block */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2
              className="fw-bold"
              style={{ color: '#FF7A00', fontSize: '2.4rem' }} // Increased heading size
            >
              Why trade indices with FOREX.com?
            </h2>
            <p className="mt-3" style={{ fontSize: '1.25rem', lineHeight: 1.5 }}>
              A lot can happen in 20 years. But throughout that time we’ve remained steadfast,
              providing traders around the world with the stability and opportunities they need to make
              their mark on the financial markets.
            </p>
            <a
              href="/open-account"
              className="btn fw-bold mt-3"
              style={{
                backgroundColor: '#006400',
                color: '#fff',
                padding: '0.75rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                display: 'inline-block',
                width: 'fit-content',
                fontSize: '1.1rem', // Increased button text size
              }}
            >
              Open an Account
            </a>
          </div>

          {/* Right Cards Block */}
          <div className="col-lg-6">
            <div className="row g-4">
              {/* Execution */}
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <FaBolt
                    size={36} // slightly bigger icon
                    color="white"
                    style={{
                      backgroundColor: '#FF7A00',
                      borderRadius: '50%',
                      padding: '0.6rem',
                      marginRight: '1rem',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  <div>
                    <h6 className="fw-bold mb-1" style={{ fontSize: '1.25rem' }}>
                      Reliable, consistent trade execution
                    </h6>
                    <p className="text-muted mb-1" style={{ fontSize: '1rem', lineHeight: 1.4 }}>
                      Peace of mind that your trades are executed swiftly, with a 100%* execution rate of less than a second.
                    </p>
                    <a
                      href="/execution-scorecards"
                      className="fw-semibold"
                      style={{ color: '#006400', fontSize: '1rem' }}
                    >
                      Execution Scorecards
                    </a>
                  </div>
                </div>
              </div>

              {/* Platforms */}
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <FaChartBar
                    size={36}
                    color="white"
                    style={{
                      backgroundColor: '#FF7A00',
                      borderRadius: '50%',
                      padding: '0.6rem',
                      marginRight: '1rem',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  <div>
                    <h6 className="fw-bold mb-1" style={{ fontSize: '1.25rem' }}>
                      Award-winning trading platforms
                    </h6>
                    <p className="text-muted mb-1" style={{ fontSize: '1rem', lineHeight: 1.4 }}>
                      Enjoy a suite of powerful platforms and access to Performance Analytics.
                    </p>
                    <a
                      href="/trading-platforms"
                      className="fw-semibold"
                      style={{ color: '#006400', fontSize: '1rem' }}
                    >
                      Trading Platforms
                    </a>
                  </div>
                </div>
              </div>

              {/* Global Market Leader */}
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <FaGlobe
                    size={36}
                    color="white"
                    style={{
                      backgroundColor: '#FF7A00',
                      borderRadius: '50%',
                      padding: '0.6rem',
                      marginRight: '1rem',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  <div>
                    <h6 className="fw-bold mb-1" style={{ fontSize: '1.25rem' }}>
                      Global market leader
                    </h6>
                    <p className="text-muted mb-1" style={{ fontSize: '1rem', lineHeight: 1.4 }}>
                      We have 20+ years of experience helping traders worldwide achieve their goals.
                    </p>
                    <a
                      href="/why-forex"
                      className="fw-semibold"
                      style={{ color: '#006400', fontSize: '1rem' }}
                    >
                      Why FOREX.com?
                    </a>
                  </div>
                </div>
              </div>

              {/* Strength and Security */}
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <FaShieldAlt
                    size={36}
                    color="white"
                    style={{
                      backgroundColor: '#FF7A00',
                      borderRadius: '50%',
                      padding: '0.6rem',
                      marginRight: '1rem',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  <div>
                    <h6 className="fw-bold mb-1" style={{ fontSize: '1.25rem' }}>
                      Strength and security
                    </h6>
                    <p className="text-muted mb-1" style={{ fontSize: '1rem', lineHeight: 1.4 }}>
                      Backed by a NASDAQ-traded company, we have the financial strength to lead.
                    </p>
                    <a
                      href="/security"
                      className="fw-semibold"
                      style={{ color: '#006400', fontSize: '1rem' }}
                    >
                      Strength and Security
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <p className="text-muted" style={{ fontSize: '1rem', lineHeight: 1.5 }}>
              *Refers to trade executions for GAIN Global Markets Inc. Please note that multiple factors may impact execution speed,
              including market conditions, platform type, network connectivity, trading strategies, and account type. Forex.com’s
              execution statistics represent orders executed on FOREX.com platforms during market hours between March 31, 2025, and
              April 30, 2025, and exclude trades/orders entered on the MetaTrader platform.
              <br />
              Market volatility, volume, and system availability may delay trade executions. Price can change quickly in fast market
              conditions, resulting in an execution price different from the price available at the time the order is submitted.
              <br />
              Price improvement is not guaranteed and will not occur in all situations. Excludes trades that received non-standard
              order processing and orders that failed to trigger.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTradeIndices;
