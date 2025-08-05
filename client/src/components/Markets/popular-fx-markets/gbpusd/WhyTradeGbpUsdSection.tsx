import React from 'react';
import Image from 'next/image';

const WhyTradeGbpUsdSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT – IMAGE */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/gbp-usd-benefits.png" // Replace with actual path
              alt="Trade GBP/USD with Nestpip"
              width={500}
              height={300}
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: '350px', objectFit: 'cover' }}
            />
          </div>

          {/* RIGHT – TEXT */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '2rem', lineHeight: '1.4' }}>
              Why Choose Nestpip for Trading GBP/USD?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '1.5rem' }}>
              Nestpip offers a superior trading environment to help you take advantage of the opportunities in the GBP/USD market.
              Here are some key reasons why thousands of traders choose Nestpip for GBP/USD trading:
            </p>

            <div className="row">
              <div className="col-md-6">
                <div className="d-flex mb-4">
                  <i className="fas fa-check-circle text-success me-3" style={{ fontSize: '1.5rem' }} />
                  <div>
                    <h5 className="fw-bold" style={{ color: '#333' }}>Very Small Gaps</h5>
                    <p style={{ fontSize: '1rem', color: '#666' }}>
                      Enjoy spreads as low as 0.0 pips — trade for less and make more.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <i className="fas fa-check-circle text-success me-3" style={{ fontSize: '1.5rem' }} />
                  <div>
                    <h5 className="fw-bold" style={{ color: '#333' }}>Quick Execution</h5>
                    <p style={{ fontSize: '1rem', color: '#666' }}>
                      Execute trades in milliseconds with Nestpip lightning-fast servers.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <i className="fas fa-check-circle text-success me-3" style={{ fontSize: '1.5rem' }} />
                  <div>
                    <h5 className="fw-bold" style={{ color: '#333' }}>Pro-Level Tools</h5>
                    <p style={{ fontSize: '1rem', color: '#666' }}>
                      Access more than 15 professional indicators, including Fibonacci, MACD, RSI, and Bollinger Bands.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex mb-4">
                  <i className="fas fa-check-circle text-success me-3" style={{ fontSize: '1.5rem' }} />
                  <div>
                    <h5 className="fw-bold" style={{ color: '#333' }}>Flexible Leverage</h5>
                    <p style={{ fontSize: '1rem', color: '#666' }}>
                      Use flexible leverage to manage risk while maximizing potential returns.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <i className="fas fa-check-circle text-success me-3" style={{ fontSize: '1.5rem' }} />
                  <div>
                    <h5 className="fw-bold" style={{ color: '#333' }}>Cross-Platform Trading</h5>
                    <p style={{ fontSize: '1rem', color: '#666' }}>
                      Trade seamlessly across desktop, mobile, and MT4, with the same user experience on all devices.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <i className="fas fa-check-circle text-success me-3" style={{ fontSize: '1.5rem' }} />
                  <div>
                    <h5 className="fw-bold" style={{ color: '#333' }}>24/5 Market Access</h5>
                    <p style={{ fontSize: '1rem', color: '#666' }}>
                      Access the GBP/USD pair anytime the forex market is open, 24 hours a day, five days a week.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4" style={{ fontSize: '1rem', color: '#333' }}>
              Your safety is our priority. Nestpip adheres to strict security measures and industry regulations to ensure your funds and personal information are always protected.
            </p>

            <div className="text-center mt-4">
              <a href="/open-account" className="btn" style={{ backgroundColor: '#f24521', color: '#fff', padding: '0.75rem 2rem', borderRadius: '30px', fontWeight: '600' }}>
                Open Your Account Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTradeGbpUsdSection;
